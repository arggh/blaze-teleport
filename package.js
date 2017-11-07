Package.describe({
  name: 'arggh:teleport',
  version: '1.0.0',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
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

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('teleport');
  api.mainModule('teleport-tests.js');
});
