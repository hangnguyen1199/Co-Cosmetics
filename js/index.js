$(document).ready(function(){
    $('.brand__slide').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
    });
    $('.feadback__content').slick({
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 3,
        arrows:false
    });
});
          