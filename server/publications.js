Meteor.publish('locatorsFromSlugs', function(slugs) {
  return Locators.find({ slug: { $in: slugs } },
    { sort: { slug: 1 } });
});

Meteor.publish('locators', function(ids) {
  return Locators.find({ _id: { $in: ids } },
    { sort: { slug: 1 } });
});
