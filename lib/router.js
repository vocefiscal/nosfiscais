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

  this.route('locatorPage', {
    path: '/:slug(*)',
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
    },
    // FIXME: Waiting for this to be fixed:
    // https://github.com/EventedMind/iron-router/issues/745
    notFoundTemplate: 'notFound'
  });
});
