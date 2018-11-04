Package.describe({
  name: 'arggh:teleport',
  version: '1.1.0',
  summary: 'Teleport renders your Blaze templates wherever you feel like!',
  git: 'https://github.com/arggh/blaze-teleport',
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