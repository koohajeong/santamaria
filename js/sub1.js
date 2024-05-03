$(document).ready(function () {
  $(document.body).scroll(function () {

    // 스크롤양 확인
    // var window = $(this).scrollTop();
    // console.log(window);

  });

  //   타이틀 제목
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 100) {
      $("#title>h2").addClass("title-h");
    } else {
      $("#title>h2").removeClass("title-h");
    }
  });

  //   타이틀 부제목
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 100) {
      $("#title>span").addClass("title-span");
    } else {
      $("#title>span").removeClass("title-span");
    }
  });

  //   브랜드 네임 이미지1
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 260) {
      $("#brandname-1").css("animation", "name-img1 2s ease-in-out forwards");
    } else {
      $("#brandname-1").css("animation", "name-img1-re 2s ease-in-out forwards");

    }
  });
  // name-explain>h6 (브랜드 네임 제목)
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 330) {
      $("#name-explain>h6").addClass("name-h");
    } else {
      $("#name-explain>h6").removeClass("name-h");
    }
  });

  //   브랜드 네임 이미지2, 부제목
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 420) {
      $("#brandname-2").addClass("name-img2");
      $("#name-explain>p").addClass("name-p");
    } else {
      $("#brandname-2").removeClass("name-img2");
      $("#name-explain>p").removeClass("name-p");
    }
  });

  //   브랜드 시초 이미지, 브랜드 시초 설명
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1000) {
      $("#brandroot").css("animation", "root-img 2s ease-in-out forwards");
      $("#root-explain>p").addClass("root");
    } else {
      $("#brandroot").css("animation", "root-img-re 2s ease-in-out forwards");
      $("#root-explain>p").removeClass("root");
    }
  });

  // 브랜드 시초 span
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1050) {
      $("#root-explain>span").addClass("root");
    } else {
      $("#root-explain>span").removeClass("root");
    }
  });


  // 브랜드 시초 h6
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1100) {
      $("#root-explain>h6").addClass("root");
    } else {
      $("#root-explain>h6").removeClass("root");
    }
  });

  // 아쿠아델라
  // 아쿠아델라 사진 1, p
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1420) {
      $("#acqua-1").css("animation", "root-img 2s ease-in-out forwards");
      $("#acqua-explain>p").addClass("name-h");
    } else {
      $("#acqua-1").css("animation", "root-img-re 2s ease-in-out forwards");
      $("#acqua-explain>p").removeClass("name-h");
    }
  });

  // 아쿠아델라 사진 2
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1550) {
      $("#acqua-2").css("animation", "root-img 2s ease-in-out forwards");
      $("#acqua-explain>span").addClass("root");

    } else {
      $("#acqua-2").css("animation", "root-img-re 2s ease-in-out forwards");
      $("#acqua-explain>span").removeClass("root");

    }
  });

  // 아쿠아델라 h6
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1600) {
      $("#acqua-explain>h6").addClass("root");

    } else {
      $("#acqua-explain>h6").removeClass("root");
    }
  });



  // 브랜드 철학
  // 브랜드 철학 이미지 1
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 1970) {
      $("#brand-philosophy>img:nth-child(1)").css("animation", "root-img 2s ease-in-out forwards");
    } else {
      $("#brand-philosophy>img:nth-child(1)").css("animation", "root-img-re 2s ease-in-out forwards");
    }
  });

  // 브랜드 철학 h6
  $(document.body).scroll(function () {

    if ($(this).scrollTop() >= 2000) {
      $("#philosophy-explain>h6").addClass("name-h");
    } else {
      $("#philosophy-explain>h6").removeClass("name-h");
    }
  });

// 브랜드 철학 이미지 2, p
$(document.body).scroll(function () {

  if ($(this).scrollTop() >= 2080) {
    $("#brand-philosophy>img:nth-child(2)").css("animation", "root-img 2s ease-in-out forwards");
    $("#philosophy-explain p").addClass("root");

  } else {
    $("#brand-philosophy>img:nth-child(2)").css("animation", "root-img-re 2s ease-in-out forwards");
    $("#philosophy-explain p").removeClass("root");

  }
});

// 브랜드 광고
// 브랜드 광고 이미지
$(document.body).scroll(function () {

  if ($(this).scrollTop() >= 2480) {
    $("#advertisement img:nth-child(2)").css("animation", "adver 1.5s ease-in-out forwards");
    $("#advertisement img:nth-child(1)").css("animation", "adver 2.5s ease-in-out forwards");
  } else {
    $("#advertisement img:nth-child(2)").css("animation", "adver-re 1.5s ease-in-out forwards");
    $("#advertisement img:nth-child(1)").css("animation", "adver-re 2.5s ease-in-out forwards");
  }
})

// 브랜드 광고 h6
$(document.body).scroll(function () {

  if ($(this).scrollTop() >= 2480) {
    $("#advertisement-explain>h6").addClass("name-h");
  } else {
    $("#advertisement-explain>h6").removeClass("name-h");
  }
});
// 브랜드 광고 p
$(document.body).scroll(function () {

  if ($(this).scrollTop() >= 2570) {
    $("#advertisement-explain p").addClass("root");

  } else {
    $("#advertisement-explain p").removeClass("root");
  }
});


});  //ready 끝

