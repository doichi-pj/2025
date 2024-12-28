// フェードイン
$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('fade-scroll');
        }
    });
  });
});



$(document).ready(function () {
// サムネイル画像をクリックしたとき
    $(".thumbnail").on("click", function () {
        const largeImageSrc = $(this).data("large"); // data-large属性から大きな画像のURLを取得
        $(".modal-image").attr("src", largeImageSrc); // モーダル内の画像を更新
        $(".modal").fadeIn(); // モーダルを表示
    });

// モーダルの閉じるボタンをクリックしたとき
    $(".close").on("click", function () {
        $(".modal").fadeOut(); // モーダルを非表示
    });

// モーダルの背景をクリックしたとき
    $(".modal").on("click", function (e) {
        if ($(e.target).is(".modal")) { // 背景がクリックされたか確認
            $(".modal").fadeOut(); // モーダルを非表示
        }
    });
});