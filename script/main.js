// Path: script/main.js
    $('.voice__container--slider--content').slick({  
        autoplay: true, //自動再生
        speed: 5000,//スライドするスピード
        arrows: true, // 左右のナビゲーションを有効にする
        dots: true, // ドットを表示
        fade: false, // フェードで切り替えなし
        infinite: true, //スライドのループ
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<img src="/../images/arrow-left-circle-fill.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="/../images/arrow-right-circle-fill.png" class="slide-arrow next-arrow">',

        responsive: [{
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }]
    });


// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', function(e) {
    $(this).toggleClass('accordion-title--active');
    $(this).next().slideToggle();
    });

    // #page-topをクリックした際の設定
$('.price-arrow-up').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});