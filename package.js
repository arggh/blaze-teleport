Package.describe({
  name: 'arggh:teleport',
  version: '1.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'templating',
    'blaze',
  ]);

  api.addFiles([
    'src/teleport.html',
    'src/teleport.js'
  ], 'client');
});