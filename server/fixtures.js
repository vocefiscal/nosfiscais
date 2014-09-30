function seedLocatorsDatabase(unsavedLocators, parentLocatorId) {
  var locatorIds = _(unsavedLocators).map(function (unsavedLocator) {
    var locator = Locators.findOne({ slug: unsavedLocator.slug });
    return  (locator && locator._id) ||
      Locators.insert(_({}).extend(unsavedLocator,
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

if (Locators.find().count() === 0) {
  seedLocatorsDatabase(
    _(['n', 'co', 'ne', 's', 'se']).map(Meteor.myFunctions.fromLocatorSlug),
    null
  );
}
