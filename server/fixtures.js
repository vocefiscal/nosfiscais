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

// Initial seeding with the incomplete data we got from http://estatistica.tse.jus.br:7777/dwtse/f?p=600:
if (Locators.find().count() === 0) {
  seedLocatorsDatabase(
    _(['n', 'co', 'ne', 's', 'se']).map(Meteor.myFunctions.fromLocatorSlug),
    null
  );
}

var secondSource;
// Add missing cities and election zones from http://agencia.tse.jus.br/estatistica/sead/odsele/votacao_partido_munzona/votacao_partido_munzona_2012.zip
if (Locators.find().count() === 5369) {
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
