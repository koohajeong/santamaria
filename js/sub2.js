$(document).ready(function () {

    // 드롭다운 메뉴
    $("#category>ul>li").mouseover(function(){
      $(this).children("#down").stop().slideDown(200);
  });
  $("#category>ul>li").mouseleave(function(){
      $(this).children("#down").stop().slideUp(200);
  });
  });