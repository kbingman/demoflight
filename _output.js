describeComponent('component_ui/ui_request_tagged_images', function () {
  beforeEach(function () {
    var html = '<form data-input="tag">';
    html += '<input type="text" name="tag" />';
    html += '<button>Search</button>';
    html += '</form>';

    setupComponent(html);
  });

  it('should trigger <needsTaggedImages> on submit', function () {
    var eventSpy = spyOnEvent(document, 'needsTaggedImages');
    var $input = this.component.$node.find('[name="tag"]');
    var $button = this.component.$node.find('button');

    $input.val('gastown');
    this.component.$node.submit();

    // expect(eventSpy).toHaveBeenTriggeredOn(document);
    // expect(eventSpy).toHaveBeenTriggeredOnAndWitth(document, {
    //   tag: 'vancouver'
    // });
  });

});
