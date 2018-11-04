Package.describe({
  name: 'arggh:teleport',
  version: '1.1.0',
  summary: 'Teleport renders your Blaze templates wherever you feel like!',
  git: 'https://github.com/arggh/blaze-teleport',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript@0.1.6',
    'templating@1.1.1',
    'blaze@2.1.2',
  ]);

  api.addFiles([
    'src/teleport.html',
    'src/teleport.js'
  ], 'client');
});