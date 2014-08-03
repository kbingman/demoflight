define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var dataInstagram = require('component_data/data_instagram');
  var uiRequestTaggedImages = require('component_ui/ui_request_tagged_images');
  var uiShowTaggedImages = require('component_ui/ui_show_tagged_images');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    uiRequestTaggedImages.attachTo('[data-input="tag"]');
    uiShowTaggedImages.attachTo('[data-container="thumbnails"]');
    dataInstagram.attachTo(document);
  }

});
