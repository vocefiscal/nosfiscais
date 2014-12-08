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

function importEmailsFromUrlAsUsers(source) {
  var sourceQuery = {};
  sourceQuery['customerIo.' + source] = { $exists: true };
  var users = Meteor.users.find(sourceQuery);

  // Proceed only if we haven't imported from this source yet
  if (users.count() === 0) {
    var url = Meteor.settings.dataUrls[source];
    // Expects a single-line text file with email addresses separated by ", "
    var result = HTTP.get(url).content;
    var emails = result.trim().split(', ');
    var userIds = _(emails).map(function (email) {
      // Find or create user
      var existingUser = Meteor.users.findOne({ "emails.address" : email });
      var userId =  existingUser ? existingUser._id :
        Accounts.createUser({ email: email });

      // Add field to customerIo info. We'll use this for segments.
      var sourceSegmentField = {};
      sourceSegmentField['customerIo.' + source] = true;
      Meteor.users.update(userId, { $set: sourceSegmentField });

      // Reidentify, now with segment field (first identify happens on createUser)
      var cio = CustomerIo.init(Meteor.settings.customerIo.siteId,
        Meteor.settings.customerIo.apiKey);

      cio.identifyUser(Meteor.users.findOne(userId));
      return userId;
    });
  }
}

// Migration #7: add users from bu@vocefiscal.org, Catarse, and app
_(['isPollTapeSenderByEmail', 'isPollTapeSenderByApp', 'isCatarseBacker']).
  each(function (source) {
  importEmailsFromUrlAsUsers(source);
});

// Migration #8: import poll tape submissions from round 2
if (PollTapeSubmissions.find().count() === 1) {
  var jsonSubmission = '{"pictureURLList": ["https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/9d835202bf1f391dcf9379d9a7d9e590.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/7cfe1b309775b88dfdc8dd70882e0494.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/e457785b993a6fd4cef640010e4bdd8b.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/b8fe133003d2164129932e54d89a9ad8.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/b2e9e2af422948c1ea8c071bb8e9217c.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/816caccf3fdce5bc52d9581959e8de40.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/da0eab7ab9ac9d065c23c13a3a80da92.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/f814498b59d7c9d4a38e9b0f1ff01cb3.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/4f19f06f2aa5ab5908c5a5e6bddf9e1e.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/ddc743759acde7c5bdf8ce61955e62d8.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/4d22f0c62b6c6ff3fb0e5902c1994212.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/9f6ecb5169b1b8c15ece828966fd2641.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/d5849bf5b2897c6aca2220c2e9271c47.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/acba6f074dc18b8e3231c56941fae7f3.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/da8377a6078e36240bcd71cd34cfec99.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/491cfbe2a10cd2c59143ed91cebe82f6.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/fb807031a9fd9c4a27877eada0986911.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/a147956ec5b2355c975df4075bad12ed.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/a7d8a01e2ef953ac18fbac263b23565c.jpg"], "localDaVotacao": "2127", "zonaEleitoral": "0006", "estado": "AC", "municipio": "BRASIL\u00c9IA", "secaoEleitoral": "0094", "data": 1412541970036}';
  var objSubmission = JSON.parse(jsonSubmission);
  var newPollTapeSubmission = {
    createdAt: objSubmission.data,
    electionRound: 2,
    stateCode: objSubmission.estado,
    city: objSubmission.municipio,
    // cityCode: ,
    electionZone: parseInt(objSubmission.zonaEleitoral),
    electionVenue: parseInt(objSubmission.localDaVotacao),
    electoralSection: parseInt(objSubmission.secaoEleitoral),
    pictureURLs: objSubmission.pictureURLList
  };
  PollTapeSubmissions.insert(newPollTapeSubmission);

  var jsonSubmission = '{"pictureURLList": ["https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/9d835202bf1f391dcf9379d9a7d9e590.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/7cfe1b309775b88dfdc8dd70882e0494.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/e457785b993a6fd4cef640010e4bdd8b.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/b8fe133003d2164129932e54d89a9ad8.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/b2e9e2af422948c1ea8c071bb8e9217c.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/816caccf3fdce5bc52d9581959e8de40.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/da0eab7ab9ac9d065c23c13a3a80da92.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/f814498b59d7c9d4a38e9b0f1ff01cb3.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/4f19f06f2aa5ab5908c5a5e6bddf9e1e.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/ddc743759acde7c5bdf8ce61955e62d8.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/4d22f0c62b6c6ff3fb0e5902c1994212.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/9f6ecb5169b1b8c15ece828966fd2641.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/d5849bf5b2897c6aca2220c2e9271c47.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/acba6f074dc18b8e3231c56941fae7f3.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/da8377a6078e36240bcd71cd34cfec99.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/491cfbe2a10cd2c59143ed91cebe82f6.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/fb807031a9fd9c4a27877eada0986911.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/a147956ec5b2355c975df4075bad12ed.jpg", "https://vocefiscal-poll-tape-uploads.s3.amazonaws.com/us-east-1%3A0635f01b-483f-4843-a62d-1c700327dd1f/br/ac/brasileia/zona-0006/a7d8a01e2ef953ac18fbac263b23565c.jpg"], "localDaVotacao": "2127", "zonaEleitoral": "0006", "estado": "AC", "municipio": "BRASIL\u00c9IA SEGUNDO EXEMPLO AEE!!", "secaoEleitoral": "0094", "data": 1412541970036}';
  var objSubmission = JSON.parse(jsonSubmission);
  var newPollTapeSubmission = {
    createdAt: objSubmission.data,
    electionRound: 2,
    stateCode: objSubmission.estado,
    city: objSubmission.municipio,
    // cityCode: ,
    electionZone: parseInt(objSubmission.zonaEleitoral),
    electionVenue: parseInt(objSubmission.localDaVotacao),
    electoralSection: parseInt(objSubmission.secaoEleitoral),
    pictureURLs: objSubmission.pictureURLList
  };
  PollTapeSubmissions.insert(newPollTapeSubmission);

}
