// *** Crowdchecking of Poll Tape Submissions

function updateCurrentPtsForReviewId(userId) {
  var user = Meteor.users.findOne(userId);
  if (! user) {
    throw new Meteor.Error("userId-does-not-exist", "userId " + userId +
      " does not exist.");
  }

  var reviewedIds = _(PollTapeVerifications.find({ userId: user._id },
    { fields: { _id: 1 } }).fetch()).pluck('_id');

  var random = Math.random();

  var ptsForReview = PollTapeSubmissions.findOne({
    _id: { $nin: reviewedIds },
    verificationCount: { $lte: 2 },
    random: { $gte: random }
  });

  if ( !ptsForReview ) {
    ptsForReview = PollTapeSubmissions.findOne(
      { verificationCount: { $lte: 2 }, random: { $lte: random } }
    );
  }

  // If there are none left for this user, set it to null
  Meteor.users.update(user._id, { $set: {
    currentPollTapeSubmissionForReviewId: ptsForReview._id } });

  return ptsForReview._id;
}

Meteor.methods({
  updateCurrentPollTapeSubmissionForReviewId: function () {
    return updateCurrentPtsForReviewId(this.userId);
  }
});

PollTapeVerifications.allow({
  // Insert callers: template `pollTapeSubmissionVerify`
  insert: function (userId, doc) {
    var user = Meteor.users.findOne(userId);
    var isOwner = user._id === doc.userId;
    var isCurrentPtsForReview = user.currentPollTapeSubmissionForReviewId ===
      doc.pollTapeSubmissionId;
    return isOwner && isCurrentPtsForReview;
  }
});

PollTapeVerifications.after.insert(function (userId, doc) {
  PollTapeSubmissions.update(doc.pollTapeSubmissionId, { $inc: {
    verificationCount: 1 } });
  updateCurrentPtsForReviewId(doc.userId);
});

// *** Locators ***

Meteor.methods({
  monitor: function (locatorId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "Você precisa fazer login para adotar uma " +
      "zona eleitoral");
    }
    var locator = Locators.findOne({ _id: locatorId,
      electionZone: { $exists: true } });

    if (!locator) {
      throw new Meteor.Error(422, 'Zona eleitoral não encontrada');
    }

    if (_.include(user.monitored_locator_ids, locator._id)) {
      throw new Meteor.Error(422, 'Você já adotou esta zona eleitoral');
    }

    if (user.monitored_locator_ids && user.monitored_locator_ids.length) {
      throw new Meteor.Error(422, 'Você só pode adotar uma zona eleitoral');
    }

    Meteor.users.update(user._id, {
      $addToSet: { monitored_locator_ids: locator._id,
        monitored_locator_slugs: locator.slug },
      $inc: { monitored_locators_count: 1 }
    });

    // If this was the first monitor who started monitoring, the number of
    // empty zones goes down by one
    var emptyZonesCountChange = locator.monitorsCount() + 1 === 1 ? -1 : 0;
    // If someone just started monitoring this leaf node (even if they're not
    // the first to do it), then its emptyZonesCount should always be set to 0.
    // BUT, if it just _went down_ to zero (from being one), the change in
    // higher-up nodes should be negative one. Since the recursion below starts
    // with the leaf node itself, in that case, we need to set emptyZonesCount
    // to positive one so that, when negatively incremented, will arrive at our
    // intended zero. If it had monitors already, there change is zero, and
    // negative zero is also what we want.
    Locators.update(locator._id, { $set: {
      emptyZonesCount: -emptyZonesCountChange } });

    // Denormalization: each node up the tree has the total monitors_count for
    // all election zones in its subtree
    var parentLocator = locator;
    while (parentLocator) {
      Locators.update(parentLocator._id, { $inc: {
        monitors_count: 1, emptyZonesCount: emptyZonesCountChange } });
      parentLocator = parentLocator.parentLocator();
    }
  },

  unmonitor: function (locatorId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "Você precisa fazer login para parar de " +
      "adotar uma zona eleitoral");
    }

    var locator = Locators.findOne({ _id: locatorId,
      electionZone: { $exists: true } });

    if (!locator) {
      throw new Meteor.Error(422, 'Zona eleitoral não encontrada');
    }

    if (!_.include(user.monitored_locator_ids, locator._id)) {
      throw new Meteor.Error(422, 'Você não adotou esta zona eleitoral');
    }

    Meteor.users.update(user._id, {
      $pullAll: { monitored_locator_ids: [ locator._id ],
        monitored_locator_slugs: [ locator.slug ] },
      $inc: { monitored_locators_count: -1 }
    });

    // If this was the last monitor who stopped monitoring, the number of
    // empty zones goes up by one
    var emptyZonesCount = locator.monitorsCount() - 1 === 0 ? 1 : 0;
    Locators.update(locator._id, { $set: {
      emptyZonesCount: emptyZonesCount } });
    // Denormalization: each node up the tree has the total for
    // all election zones in its subtree
    var parentLocator = locator;
    while (parentLocator) {
      Locators.update(parentLocator._id, { $inc: {
        monitors_count: -1, emptyZonesCount: emptyZonesCount } });
      parentLocator = parentLocator.parentLocator();
    }
  }
});