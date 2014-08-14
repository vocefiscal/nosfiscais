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
    onAfterAction: function() {
      var disqus_developer, disqus_identifier, disqus_shortname, disqus_title, disqus_url, dsq, locator;
      if (window.DISQUS) {
        locator = this.data;
        return window.DISQUS.reset({
          reload: true,
          config: function() {
            this.page.identifier = locator.slug;
            this.page.title = locator.fullName;
            return this.page.url = window.location.href;
          }
        });
      } else {
        disqus_shortname = 'nosfiscais';
        disqus_identifier = this.data.slug;
        disqus_title = this.data.fullName;
        disqus_url = window.location.href;
        disqus_developer = 1;
        dsq = document.createElement("script");
        dsq.type = "text/javascript";
        dsq.async = true;
        dsq.src = "//" + disqus_shortname + ".disqus.com/embed.js";
        return (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);
      }

    },
    // FIXME: Waiting for this to be fixed:
    // https://github.com/EventedMind/iron-router/issues/745
    notFoundTemplate: 'notFound'
  });
});
