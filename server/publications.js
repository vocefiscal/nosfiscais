Meteor.publish('locatorsFromSlugs', function (slugs) {
  return Locators.find({ slug: { $in: slugs } },
    { sort: { shortName: 1 } });
});

Meteor.publish('locatorsFromSlugRegExp', function (strRegExp) {
  return Locators.find({ slug: { $regex: strRegExp } },
    { sort: { shortName: 1 } });
});

Meteor.publish('locators', function (ids) {
  return Locators.find({ _id: { $in: ids } },
    { sort: { shortName: 1 } });
});

Meteor.publish('userData', function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
      {fields: {'monitored_locator_ids': 1, 'monitored_locator_slugs': 1,
        'monitored_locators_count': 1}});
  } else {
    this.ready();
  }
});

Meteor.publish('pollTapeSubmissionToVerify', function (rand) {
  console.log("rand: " + rand);
  console.log(PollTapeSubmissions.find().fetch());
  var result = PollTapeSubmissions.find({ verificationCount: { $lte: 2 },
    random: { $gte: rand } }, { limit: 1 });
  if ( result.count() == 0 ) {
    result = PollTapeSubmissions.find({ verificationCount: { $lte: 2 },
      random: { $lte: rand } }, { limit: 1 });
  }
  // debugger;
  console.log("result.count(): " + result.count());
  return result;
});
