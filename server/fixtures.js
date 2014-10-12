function seedLocatorsDatabase(unsavedLocators, parentLocatorId) {
  var locatorIds = _(unsavedLocators).map(function (unsavedLocator) {
    var locator = Locators.findOne({ slug: unsavedLocator.slug });
    // Let's assume the first, incomplete, data source was migration '0'.
    // In production, however, migration '0' locators won't have the field.
    var migration = {
      migration: electionZoneData === secondSource ? '1' : '0' };
    return  (locator && locator._id) ||
      Locators.insert(_({}).extend(unsavedLocator, migration,
        { parentId: parentLocatorId }));
  });

  Locators.find({ _id: { $in: locatorIds } }).
    forEach(function (locator) {
      var unsavedChildren = Meteor.myFunctions.
        childrenFromLocatorSlug(locator.slug);
      var childrenLocatorIds = seedLocatorsDatabase(unsavedChildren,
        locator._id);
      Locators.update(locator._id, { $set: {
        childrenIds: childrenLocatorIds } });
    }
  );

  return locatorIds;
}

// Migration #0: initial seeding with the incomplete data we got from http://estatistica.tse.jus.br:7777/dwtse/f?p=600:
if (Locators.find().count() === 0) {
  seedLocatorsDatabase(
    _(['n', 'co', 'ne', 's', 'se']).map(Meteor.myFunctions.fromLocatorSlug),
    null
  );
}

// Migration #1:
var secondSource;
// Add missing cities and election zones from http://agencia.tse.jus.br/estatistica/sead/odsele/votacao_partido_munzona/votacao_partido_munzona_2012.zip
if (Locators.find().count() === 5369) {
  newElectionZoneData = JSON.parse(Assets.getText('data/election_zones.json'));
  var states = Locators.findStates().fetch();
  // Complete information in new election zones from existing locators so we
  // adhere to the same format as election_zone_data.js for seeding.
  secondSource = _(newElectionZoneData).map(function (unsavedLocator) {
    var state = _(states).
      where({ stateCode: unsavedLocator.stateCode })[0];
    var zone = _({}).extend(unsavedLocator, {
      state: state.state,
      region: state.region,
      regionCode: state.regionCode
    });
    _(zone).extend({
      slug: [
        state.slug,
        Meteor.myFunctions.removeDiacritics(zone.city.toLowerCase()).
          replace(/\s+/g, '-'),
        'zona-' + ('00' + zone.electionZone).slice(-3) // turns "1" into "001"
      ].join('/')
    });
    return zone;
  });

  // Replace the global variable `electionZoneData` before calling
  // `seedLocatorsDatabase`.
  electionZoneData = secondSource;
  seedLocatorsDatabase(
    _(['n', 'co', 'ne', 's', 'se']).map(Meteor.myFunctions.fromLocatorSlug),
    null
  );
}

// Migration #3: Denormalize empty zones count
if (Locators.findOne().emptyZonesCount === undefined) {
  Locators.find({ slug: { $regex: '^[a-z]+\/[a-z]+\/[a-z-]+\/[a-z0-9-]+$' } }).
  forEach(function (zone) {
    var emptyZonesCount = zone.monitorsCount() === 0 ? 1 : 0;
    Locators.update(zone._id, { $set: {
      emptyZonesCount: emptyZonesCount, zonesCount: 1
    } });
    // Denormalization: each node up the tree has the total for
    // all election zones in its subtree
    var parentLocator = zone.parentLocator();
    while (parentLocator) {
      Locators.update(parentLocator._id, { $inc: {
        emptyZonesCount: emptyZonesCount, zonesCount: 1 } });
      parentLocator = parentLocator.parentLocator();
    }
  });
}

// Migration #4: assign locatorType for all locators
var untypedLocators = Locators.find({ locatorType: { $exists: false } });
if (untypedLocators.count() !== 0) {
  untypedLocators.forEach(function (loc) {
    if (loc.electoralSection !== undefined) {
      Locators.update(loc._id, { $set: { locatorType: 'electoralSection' } });
    } else if (loc.electionZone !== undefined) {
      Locators.update(loc._id, { $set: { locatorType: 'electionZone' } });
    } else if (loc.city !== undefined) {
      Locators.update(loc._id, { $set: { locatorType: 'city' } });
    } else if (loc.state !== undefined) {
      Locators.update(loc._id, { $set: { locatorType: 'state' } });
    } else if (loc.region !== undefined) {
      Locators.update(loc._id, { $set: { locatorType: 'region' } });
    } else {
      console.log("Error while assigning type to: " + JSON.stringify(loc));
    }
  });
}

// Migration #5: add existing users to Customer.io
var unidentifiedUsers = Meteor.users.find({ customerIo: { $exists: false } });
if (unidentifiedUsers.count() !== 0) {
  var cio = CustomerIo.init(Meteor.settings.customerIo.siteId,
    Meteor.settings.customerIo.apiKey);

  unidentifiedUsers.forEach(function (user) {
    // If user had been created from the newsletter form with their email
    // as the ID, we need to remove them first to avoid duplicate emails
    cio.delete(user.emails[0].address);

    // Add to Customer.io
    cio.identifyUser(user);

    // Remember that we added to Customer.io
    Meteor.users.update(user._id, { $set: {
      customerIo: { isIdentified: true } } });
  });
}

// Migration #6: replace isIdentified with isNosFiscaisUser on Customer.io
var users = Meteor.users.find({ 'customerIo.isIdentified': { $exists: true } });
if (users.count() !== 0) {
  var cio = CustomerIo.init(Meteor.settings.customerIo.siteId,
    Meteor.settings.customerIo.apiKey);

  users.forEach(function (user) {
    // Remember that we added isNosFiscaisUser to Customer.io
    Meteor.users.update(user._id, { $set: {
      customerIo: { isNosFiscaisUser: true } } });

    // Reflect change in memory so that cio.identifyUser() gets the new value
    user.customerIo['isNosFiscaisUser'] = true;

    // identifyUser sends everything in user.customerIo as properties to cio
    cio.identifyUser(user);

  });
}
