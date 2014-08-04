/**
 * Instagram Data Component
 */

define(function(require) {

  var component = require('flight/lib/index').component;
  var utils = require('flight/lib/index').utils;

  return component(dataInstagram);

  function dataInstagram() {

    this.attributes({
      baseUrl: 'https://api.instagram.com/v1/',
      clientId: 'cc4b947cbca8405fa1b56f7df01c3677'
    });

    this.request = function(path, options){
      var xhr = {
        url: this.attr.baseUrl + path,
        jsonp: 'callback',
        dataType: 'jsonp',
        context: this
      };
      xhr = utils.merge(xhr, options);
      return $.ajax(xhr);
    };

    this.getTaggedImages = function(e, data){
      var path = 'tags/' + data.tag + '/media/recent';
      var options = {
        data: { client_id: this.attr.clientId }
      };
      var request = this.request(path, options);

      request.done(function(response){
        this.trigger(document, 'uiShowTaggedImages', response);
      });
    };

    this.after('initialize', function() {
      this.on('needsTaggedImages', this.getTaggedImages);
    });
  }

});
