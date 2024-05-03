$(document).ready(function () {
  // 인트로
  $('#intro-background > div:gt(0)').hide();
  setInterval(function () {
    $('#intro-background > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#intro-background');
  }, 6000);

  // 상단메뉴 고정
  var menu = $("#menu").offset().top;

  $(document.body).scroll(function () {

    // var window = $(this).scrollTop();
    // console.log(window);

    if (menu <= window) {
      $("#menu").addClass("fixed");
      $(".menu-bg").addClass("menu-bg-fixed");
    } else {
      $("#menu").removeClass("fixed");
      $(".menu-bg").removeClass("menu-bg-fixed");
    }
  });

  // 브랜드 제목 슬라이드
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 280) {
      $("#brand>h1").addClass("brand-title");
    } else {
      $("#brand>h1").removeClass("brand-title");
    }
  });

  // 브랜드 부제목 슬라이드
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 350) {
      $("#brand>p").addClass("brand-subtitle");
    } else {
      $("#brand>p").removeClass("brand-subtitle");
    }
  });

  /* 브랜드 스토리 버튼 슬라이드 */
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 450) {
      $("#brand>a").css("animation", "brand-a 1.8s ease-in-out forwards");
    } else {
      $("#brand>a").css("animation", "0");
    }
  });

  // 베스트 제목
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1200) {
      $("#best>h3").addClass("best-h");
    } else {
      $("#best>h3").removeClass("best-h");
    }
  });

  // 베스트 본문
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1200) {
      $("#explain>p").addClass("best-p");
    } else {
      $("#explain>p").removeClass("best-p");
    }
  });

  // 베스트 사진
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1200) {
      $("#product_1>#best_1, #product_2>#best_3").addClass("best-1");
      $("#product_1>#best_2, #product_2>#best_4").addClass("best-2");
    } else {
      $("#product_1>#best_1, #product_2>#best_3").removeClass("best-1");
      $("#product_1>#best_2, #product_2>#best_4").removeClass("best-2");
    }
  });

  // 로사
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1950) {
      $("#rosa>span").addClass("rosa-span");
    } else {
      $("#rosa>span").removeClass("rosa-span");
    }
  });

  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1950) {
      $("#rosa>h2").addClass("rosa-h");
    } else {
      $("#rosa>h2").removeClass("rosa-h");
    }
  });

  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1950) {
      $("#rosa>p").addClass("rosa-p");
    } else {
      $("#rosa>p").removeClass("rosa-p");
    }
  });





});  //ready 끝