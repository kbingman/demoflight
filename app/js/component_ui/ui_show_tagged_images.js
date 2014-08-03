/**
 * Image Display Component
 */

define(function(require) {

  var component = require('flight/lib/index').component;

  return component(requestTaggedImages);

  function requestTaggedImages() {

    this.attributes({

    });

    this.renderImages = function(e, response){
      var images = response.data.map(function(img){
        var $image = $('<img/>').attr('src', img.images.thumbnail.url);
        return $image;
      });
      this.$node
        .empty()
        .html(images);
    };

    this.after('initialize', function() {
      this.on(document, 'uiShowTaggedImages', this.renderImages);
    });
  }

});
