// slick slider
$(document).ready(function(){
    $('.slider_img_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    }); 
  });

  
$(document).ready(function() {
    $('#slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('#btt-prev'),
        nextArrow: $('#btt-next'),
        // responsive: [{
        //     breakpoint: 1025,
        //     settings: {
        //         dots: true,
        //         infinite: true,
        //         speed: 300,
        //         slidesToShow: 1,
        //         adaptiveHeight: true,
        //         autoplay: true,
        //         autoplaySpeed: 2000,
        //     }
        // }, {
        //     breakpoint: 769,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         autoplay: true,
        //         autoplaySpeed: 2000,
        //     }
        // }, ]
    });
})
$(document).ready(function() {
    $('.slide_makeup--item').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})
$(document).ready(function() {
    $('.news__slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    });
})
$(document).ready(function() {
    $('.brand__slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
    $('.feadback__content').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });
});

