'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/\.spec\.js$/.test(file));
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/bower_components',

  paths: {
    'component_ui': '../js/component_ui',
    'component_data': '../js/component_data',
    'page': '../js/page',
    'templates': '../templates',
    'text': 'text/text',
    'hogan': 'hogan/web/builds/3.0.2/hogan-3.0.2.min.amd'
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
