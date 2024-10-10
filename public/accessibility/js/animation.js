// MVアニメーション
// --------------------------------
$(window).on('load', function () {
  $('.blur-start').each(function(){
      $(this).addClass('blur');
  });

  // イラストフェードイン
  $('.scroll-illust-1').each(function () {
      $(this).addClass('scroll-1');
  });

  $('.scroll-illust-2').each(function () {
      $(this).addClass('scroll-2');
  });

  $('.scroll-illust-3').each(function () {
      $(this).addClass('scroll-3');
  });
});

// スクロールアニメーション
// --------------------------------
$(window).on("load scroll", function () {
  $('.scroll-fade,.scroll-up,.scroll-down,.scroll-right,.scroll-left,.scroll-up-serial,.blur-scholl,.scroll-illust-4')
  .each(function () {
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if (scrollPos > (elemOffset - 500) - wh + wh / 2) {
      $(this).addClass('done');
    }
  });
});