/**
 * Instagram Data Component
 */

define(function(require) {

  var flight = require('flight/lib/index');
  var withRequest = require('mixin/with_request');

  return flight.component(withRequest, dataInstagram);

  function dataInstagram() {

    this.attributes({
      baseUrl: 'https://api.instagram.com/v1/',
      clientId: null
    });

    this.getTaggedImages = function(e, data){
      var path = 'tags/' + data.tag + '/media/recent';
      var options = {
        data: { client_id: this.attr.clientId }
      };
      var request = this.request(path, options);

      request.error(function(response){
        console.log('error', response);
      }).done(function(response){
        if (response.meta.error_message){
          this.trigger(document, 'uiShowErrorMessage', {
            message: response.meta.error_message
          });
        } else {
          this.trigger(document, 'uiClearMessage');
        }
        this.trigger(document, 'uiShowTaggedImages', response);
      });
    };

    this.after('initialize', function() {
      this.on('needsTaggedImages', this.getTaggedImages);
    });
  }

});
