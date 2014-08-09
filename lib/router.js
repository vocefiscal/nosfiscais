Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('locatorsList', { path: '/' });
  this.route('meta');
  this.route('contato');

  this.route('locatorPage', {
    path: '/:slug(*)',
    data: function() {
      var params = this.params;
      return locatorsData.filter(function (el) {
        return el.slug == params.slug;
      })[0];
    }
  });
});
