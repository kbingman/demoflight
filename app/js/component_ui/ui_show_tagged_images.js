/**
 * Image Display Component
 */

define(function(require) {

  var component = require('flight/lib/index').component;
  var hogan = require('hogan');
  var thumbnail = require('text!templates/_thumbnail.mustache');

  return component(requestTaggedImages);

  function requestTaggedImages() {

    this.attributes({

    });

    this.renderImages = function(e, response){
      var data = response.data || [];
      var images = data.map(function(img){
        return {
          'href': img.link,
          'src': img.images.thumbnail.url
        };
      });
      var template = hogan.compile(thumbnail);

      this.$node
        .empty()
        .html(template.render({ images: images }));
    };

    this.after('initialize', function() {
      this.on(document, 'uiShowTaggedImages', this.renderImages);
    });
  }

});
