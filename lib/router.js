Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('faq');
  this.route('contato');

  this.route('locatorPage', {
    path: '/:slug(*)',
    data: function() {
      var params = this.params;
      // We can always assume slugs don't end in '/'
      var locatorSlug = params.slug.slice(-1)[0] === '/' ?
        params.slug.slice(0, -1) : params.slug;
      return Meteor.myFunctions.fromLocatorSlugWithChildrenAndParent(locatorSlug);
    },
    // FIXME: Waiting for this to be fixed:
    // https://github.com/EventedMind/iron-router/issues/745
    notFoundTemplate: 'notFound'
  });
});
