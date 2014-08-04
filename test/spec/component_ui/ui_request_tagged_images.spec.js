describeComponent('component_ui/ui_show_tagged_images', function () {
  beforeEach(function () {
    var html = '<form data-input="tag">';
    html += '<input type="text" name="tag" />';
    html += '<button>Search</button>';
    html += '</form>';

    setupComponent(html);
  });

  it('should be defined', function () {
    var eventSpy = spyOnEvent(document, 'needsTaggedImages');
    var $input = this.component.$node.find('[name="tag"]');
    var $button = this.component.$node.find('button');
    // $input.val('gastown');
    // $button.click();
    console.log($button)

    expect(eventSpy).toHaveBeenTriggeredOn(document);
  });

});
