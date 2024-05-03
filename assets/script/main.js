$('.voice__container--slider--content').slick({
    autoplay: true,
    speed: 5000,
    arrows: true,
    dots: true,
    fade: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img src="/assets/images/arrow-left-circle-fill.png" class="slide-arrow prev-arrow" alt="">',
    nextArrow: '<img src="/assets/images/arrow-right-circle-fill.png" class="slide-arrow next-arrow"alt="">',

    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});


// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', function (e) {
    $(this).toggleClass('accordion-title--active');
    $(this).next().slideToggle();
});


//スクロールするとフェードイン
$('.price-arrow-up').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height() / 10) {
        $('.price-arrow-up').fadeIn();
    } else {
        $('.price-arrow-up').fadeOut();
    }
});

