define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var dataInstagram = require('component_data/data_instagram');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    dataInstagram.attachTo(document);
  }

});
