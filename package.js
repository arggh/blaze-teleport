Package.describe({
  name: 'arggh:teleport',
  version: '1.1.2',
  summary: 'Teleport renders your Blaze templates wherever you feel like!',
  git: 'https://github.com/arggh/blaze-teleport',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use([
    'ecmascript',
    'templating@1.3.0',
    'blaze@2.3.0'
  ], 'client');

  api.addFiles([
    'src/teleport.html',
    'src/teleport.js'
  ], 'client');
});