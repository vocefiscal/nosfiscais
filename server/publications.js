Meteor.publish('pollTapeVerificationsCount', function () {
  Counts.publish(this, 'pollTapeVerifications', PollTapeVerifications.find());
});

Meteor.publish('pollTapeSubmissionsCount', function () {
  Counts.publish(this, 'pollTapeSubmissions', PollTapeSubmissions.find());
});

Meteor.publish('pollTapeSubmissionsFromIds', function (ids) {
  return PollTapeSubmissions.find({ _id: { $in: ids } });
});

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
    return Meteor.users.find({ _id: this.userId }, { fields: {
      'monitored_locator_ids': 1,
      'monitored_locator_slugs': 1,
      'monitored_locators_count': 1,
      'currentPollTapeSubmissionForReviewId': 1,
      'pollTapeVerificationsCount': 1,
      'isAdmin': 1
    } });
  } else {
    this.ready();
  }
});

Meteor.publish("userStatus", function () {
  return Meteor.users.find({ "status.online": true }, { fields: {
    status: 1,
    pollTapeVerificationsCount: 1
 } });
});
