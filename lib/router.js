Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('meta');
  this.route('contato');

  this.route('locatorPage', {
    path: '/:slug(*)',
    data: function() {
      var params = this.params;
      return Meteor.myFunctions.fromLocatorSlug(params.slug);
    },
    // FIXME: Waiting for this to be fixed:
    // https://github.com/EventedMind/iron-router/issues/745
    notFoundTemplate: 'notFound'
  });
});
