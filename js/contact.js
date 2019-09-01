$(document).ready(function() {
  $(".header-menu").css("transform", "translateY(" + 80 + "px)");

  $("#icon-menu-2").click(function() {
    if (parseInt($(".header-menu").css("right")) != 0) {
      $(".header-menu").css("right", "0px");
      $("#icon-menu-2").css("right", "80px");
    } else {
      $(".header-menu").css("right", "-200px");
      $("#icon-menu-2").css("right", "20px");
    }
  });
});
