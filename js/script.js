$( function () {

    // slick
    $('.slider').slick ( {
        autoPlay: false,
        slidesToShow: 4,
        slideToScroll: 1,
        infinite: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
    });
});