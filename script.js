    $('.owl-carousel').owlCarousel({
        items:1,
        dots: true,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

$('.js-timeline').Timeline();
    $('.timeline-2').Timeline({
  	autoplay: true,
 	 mode: 'vertical',
 	 itemClass: 'box-item',
});
    $('.timeline-2').Timeline({
  itemClass: 'box-item',
  dotsPosition: 'top',
  startItem: 'last'
});