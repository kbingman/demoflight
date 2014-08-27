/**
 * Instagram Data Component
 */

define(function(require) {

  var flight = require('flight/lib/index');
  var utils = flight.utils;

  return withRequest;

  function withRequest() {

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

  }

});
