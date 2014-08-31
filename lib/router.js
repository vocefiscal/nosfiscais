function trimTrailingSlash(str) {
  return str.slice(-1)[0] === '/' ? str.slice(0, -1) : str;
}

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  onBeforeAction: 'loading',
  waitOn: function () { Meteor.subscribe("userData"); }
});

Router.map(function() {
  var homeLocatorSlugs = ['n', 'co', 'ne', 's', 'se'];

  this.route('home', {
    path: '/',
    waitOn: function () {
      return Meteor.subscribe('locatorsFromSlugs', homeLocatorSlugs);
    },
    data: function () {
      return {
        locators: Locators.find({ slug: { $in: homeLocatorSlugs } },
          { sort: { slug: 1 } })
      };
    }
  });

  this.route('faq');

  this.route('contato');

  this.route('locatorPage', {
    path: '/:slug(*)',
    waitOn: function () {
      return Meteor.subscribe('locatorsFromSlugs',
        [trimTrailingSlash(this.params.slug)]);
    },
    data: function () {
      return Locators.findOne({ slug: trimTrailingSlash(this.params.slug) });
    },
    onBeforeAction: function () {
      // Hack to allow for reactive join. Replace with package/core feature
      // when there's a mature enough alternative.
      // Taken from: https://www.discovermeteor.com/blog/reactive-joins-in-meteor/
      if (this.data()) {
        var locator = this.data();
        var locatorIds = locator.childrenIds.slice(0);
        locatorIds.push(locator.parentId);
        Meteor.subscribe('locators', locatorIds);
      }
    },
    // FIXME: Waiting for this to be fixed:
    // https://github.com/EventedMind/iron-router/issues/745
    notFoundTemplate: 'notFound'
  });
});
