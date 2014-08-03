/**
 * Tag Form Component
 */

define(function(require) {

  var component = require('flight/lib/index').component;

  return component(requestTaggedImages);

  function requestTaggedImages() {

    this.attributes({
      'tagInput': '[name="tag"]'
    });

    this.requestTag = function(e, data){
      e.preventDefault();
      var tag = this.select('tagInput').val();
      this.trigger('needsTaggedImages', {
        tag: tag
      });
    };

    this.after('initialize', function() {
      this.on('submit', this.requestTag);
    });
  }

});
