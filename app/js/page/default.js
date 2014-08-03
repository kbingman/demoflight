define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var dataInstagram = require('component_data/data_instagram');
  var uiShowTaggedPhotos = require('component_ui/ui_request_tagged_photos');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    uiShowTaggedPhotos.attachTo('[data-input="tag"]');
    dataInstagram.attachTo(document);
  }

});
