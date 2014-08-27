/**
 * Message Component
 */

define(function(require) {

  var component = require('flight/lib/index').component;

  return component(uiShowMessages);

  function uiShowMessages() {

    this.clearMessage = function(e, data){
      this.$node.empty();
    };

    this.showMessage = function(e, data){
      this.$node.text(data.message);
    };

    this.after('initialize', function() {
      this.on(document, 'uiShowErrorMessage', this.showMessage);
      this.on(document, 'uiClearMessage', this.clearMessage);
    });
  }

});
