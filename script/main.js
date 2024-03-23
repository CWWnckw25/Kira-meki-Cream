//画面幅が768px以下の場合、スライダーの表示は1つになり、画面幅が768px以上の場合、スライダーの表示は3つになります。
// Path: script/main.js
$(window).on('load resize', function(){
    if($(window).width() > 768){
        $('.voice__container--slider--content').not('.slick-initialized').slick({  
            autoplay: true, //自動再生
            speed: 5000,//スライドするスピード
            arrows: true, // 左右のナビゲーションを有効にする
            dots: true, // ドットを表示
            fade: false, // フェードで切り替えなし
            infinite: true, //スライドのループ
            slidesToShow: 3,
            slidesToScroll: 3
        });}
    else{
        $('.voice__container--slider--content').not('.slick-initialized').slick({  
            autoplay: true, //自動再生
            speed: 5000,//スライドするスピード
            arrows: true, // 左右のナビゲーションを有効にする
            dots: true, // ドットを表示
            fade: false, // フェードで切り替えなし
            infinite: true, //スライドのループ
            slidesToShow: 1
    });
}});

// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', function(e) {

    // .accordion-contentを選択
    var content = $(this).next();
    // .accordion-contentを表示・非表示
    content.slideToggle();
    });