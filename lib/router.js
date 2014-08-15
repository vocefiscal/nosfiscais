function reloadDisqus(identifier, title) {
  if (window.DISQUS) {
    return window.DISQUS.reset({
      reload: true,
      config: function() {
        this.page.identifier = identifier;
        this.page.title = title;
        return this.page.url = window.location.href;
      }
    });
  }
}

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('faq', {
    onAfterAction: function() {
      var identifier = 'faq';
      var title = 'FAQ';
      reloadDisqus(identifier, title);
    }
  });
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
    onAfterAction: function() {
      var identifier = this.data.slug;
      var title = this.data.fullName;
      reloadDisqus(identifier, title);
    },
    // FIXME: Waiting for this to be fixed:
    // https://github.com/EventedMind/iron-router/issues/745
    notFoundTemplate: 'notFound'
  });
});
