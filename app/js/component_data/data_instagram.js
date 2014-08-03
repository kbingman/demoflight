/**
 * Storage Data Component
 */

define(function(require) {

  var component = require('flight/lib/index').component;
  var utils = require('flight/lib/index').utils;

  return component(dataInstagram)

  function dataInstagram() {

    this.attributes({
      baseUrl: 'https://api.instagram.com/v1/',
      clientId: 'cc4b947cbca8405fa1b56f7df01c3677'
    })

    this.request = function(path, options){
      options = options || {};
      var data = options.data || {};
      data.client_id = this.attr.clientId;

      var xhr = {
        url: this.attr.baseUrl + path,
        jsonp: 'callback',
        dataType: 'jsonp',
        data: data,
        context: this
      };
      xhr = utils.merge(xhr, options);
      return $.ajax(xhr);
    };

    this.getTaggedData = function(tag){
      var request = this.request('tags/' + tag + '/media/recent');
      request.done(function(response){
        this.trigger('uiShowTaggedImages', response);
      });
    };

    this.after('initialize', function() {
      this.getTaggedData('gastown');
    });
  }

});
