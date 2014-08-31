Package.describe({
  summary: "Disqus package"
});

Package.on_use(function (api) {
  api.add_files('disqus_loader.js', 'client');
  api.add_files('disqus.html', 'client');
  api.add_files('disqus.js', 'client');
  api.use(['templating'], 'client');
});
