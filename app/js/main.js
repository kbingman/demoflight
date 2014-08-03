'use strict';

requirejs.config({
  baseUrl: 'bower_components',
  paths: {
    'component_data': '../js/component_data',
    'component_ui': '../js/component_ui',
    'mixin': '../js/mixin',
    'page': '../js/page'
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger',
    'flight/lib/debug'
  ],

  function(compose, registry, advice, withLogging, debug) {
    debug.enable(true);
    compose.mixin(registry, [advice.withAdvice]);;

    DEBUG.events.logAll();

    require(['page/default'], function(initializeDefault) {
      initializeDefault();
    });
  }
);
