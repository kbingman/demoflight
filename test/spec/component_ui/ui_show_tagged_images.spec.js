describeComponent('component_ui/ui_show_tagged_images', function () {
  beforeEach(function () {
    setupComponent();
    this.component.trigger('uiShowTaggedImages', {
      meta: { code: 200},
      data: [{
        images: {
          low_resolution: {
            height: 306,
            url: 'low.jpg',
            width: 306
          },
          standard_resolution: {
            height: 640,
            url: '/standard.jpg',
            width: 400
          },
          thumbnail: {
            height: 150,
            url: 'http://scontent-b.cdninstagram.com/hphotos-xpa1/t51.2885-15/10518086_543462722424605_414045826_s.jpg',
            width: 150
          }
        },
        link: 'http://instagram.com/p/rQLD3OpSBW/',
        type: 'image'
      }]
    });
  });

  it('should add an image on <uiShowTaggedImages>', function () {
    expect(this.component.$node.find('img').length).toEqual(1);
  });

  it('should add the correct size to the img src', function () {
    expect(this.component.$node.find('img').attr('src')).toEqual('http://scontent-b.cdninstagram.com/hphotos-xpa1/t51.2885-15/10518086_543462722424605_414045826_s.jpg');
  });
});
