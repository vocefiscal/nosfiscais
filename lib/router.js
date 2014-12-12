function trimTrailingSlash(str) {
  return str.slice(-1)[0] === '/' ? str.slice(0, -1) : str;
}

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  onBeforeAction: 'loading'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function () {
      return Meteor.subscribe('locatorsFromSlugRegExp',
        Locators.statesSlugRegExpStr);
    },
    data: function () {
      return {
        locators: Locators.findStates()
      }
    }
  });

  this.route('faq');

  this.route('contato');

  this.route('pollTapeSubmissionVerify', {
    path: 'conferir',
    waitOn: function () {
      if (! Meteor.user()) {
        return null;
      }
      var currentPtsId = Meteor.user().currentPollTapeSubmissionForReviewId;

      // Subscribing to `userData` makes sure that the currentPts field will
      // only be undefined in the `data` function if it's actually undefined in
      // the database, not because the data hasn't arrived yet.
      // FIXME: that's what should happen in theory, but
      // updateCurrentPollTapeSubmissionForReviewId is still being called at
      // odd times depending on refresh timing. It's an edge case that shouldn't
      // impact the user experience. The user will always get a valid submission
      // to review either way, it just might not be the same where they had
      // previously stopped reviewing.
      return [
        Meteor.subscribe('pollTapeSubmissions', [currentPtsId]),
        Meteor.subscribe('userData'),
        Meteor.subscribe('pollTapeVerificationsCount'),
        Meteor.subscribe('pollTapeSubmissionsCount')];
    },
    data: function () {
      if (! Meteor.user()) {
        return null;
      }
      if (Meteor.user().currentPollTapeSubmissionForReviewId === undefined) {
        Meteor.call('updateCurrentPollTapeSubmissionForReviewId');
      }
      var currentPtsId = Meteor.user().currentPollTapeSubmissionForReviewId;
      Session.set('pollTapeVerificationStartedAt-Date:userId-' + Meteor.userId() +
        ':pollTapeSubmissionId-' + currentPtsId, new Date());
      return PollTapeSubmissions.findOne(currentPtsId);
    }
  });

  this.route('locatorPage', {
    path: '/:slug(.*)',
    waitOn: function () {
      // Subscribes to all ancestors, including the locator itself.
      // Used for breadcrumbs.
      return Meteor.subscribe('locatorsFromSlugs',
        Locators.allPrefixSlugsFrom(trimTrailingSlash(this.params.slug)));
    },
    data: function () {
      return Locators.findOne({ slug: trimTrailingSlash(this.params.slug) });
    },
    onBeforeAction: function () {
      // TODO: see if mongodb's $in operator allows for regexps. If yes,
      // we can get the locator, its ancestors and children all with the same
      // subscribe, by calling allPrefixSlugsFrom(slug) and making a regexp
      // like /^{{slug + '/'}}(^\/)+/ (slug + slash + another segment, which is
      // a sequence of one or more non-slashes)

      // Hack to allow for reactive join. Replace with package/core feature
      // when there's a mature enough alternative.
      // Taken from: https://www.discovermeteor.com/blog/reactive-joins-in-meteor/
      if (this.data()) {
        var locator = this.data();
        var locatorIds = locator.childrenIds.slice(0);
        locatorIds.push(locator.parentId);
        Meteor.subscribe('locators', locatorIds);
      }
      this.next();
    },
    notFoundTemplate: 'notFound'
  });
});
