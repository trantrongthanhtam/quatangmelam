$(document).ready(function() {
      $(".header-menu").css("transform", "translateY(" + 80 + "px)");
    $(".header-menu").css("height", "80px");
  if (window.location.href.indexOf("#lancheck") != -1) {
    $("#lan").attr("checked", "checked");
  }
  if (window.location.href.indexOf("#hongcheck") != -1) {
    $("#hong").attr("checked", "checked");
  }
  if (window.location.href.indexOf("#sencheck") != -1) {
    $("#sen").attr("checked", "checked");
  }
  if (window.location.href.indexOf("#daicheck") != -1) {
    $("#dai").attr("checked", "checked");
  }
  if (window.location.href.indexOf("#khaccheck") != -1) {
    $("#khac").attr("checked", "checked");
  }
  $("#icon-menu-2").click(function() {
    if (parseInt($(".header-menu").css("right")) != 0) {
      $(".header-menu").css("right", "0px");
      $("#icon-menu-2").css("right", "80px");
    } else {
      $(".header-menu").css("right", "-200px");
      $("#icon-menu-2").css("right", "20px");
    }
  });
  if (document.getElementById("all").checked == true) {
    $(".hoalan").css("display", "block");
    $(".hoahong").css("display", "block");
    $(".hoadai").css("display", "block");
    $(".hoasen").css("display", "block");
    $(".hoakhac").css("display", "block");
    document.getElementById("change-title").innerHTML = "Tất cả sản phẩm";
  }
  if (document.getElementById("lan").checked == true) {
    $(".hoalan").css("display", "block");
    $(".hoahong").css("display", "none");
    $(".hoadai").css("display", "none");
    $(".hoasen").css("display", "none");
    $(".hoakhac").css("display", "none");
    document.getElementById("change-title").innerHTML = "Bộ sưu tập Hoa Lan";
  }
  if (document.getElementById("hong").checked == true) {
    $(".hoalan").css("display", "none");
    $(".hoahong").css("display", "block");
    $(".hoadai").css("display", "none");
    $(".hoasen").css("display", "none");
    $(".hoakhac").css("display", "none");
    document.getElementById("change-title").innerHTML = "Bộ sưu tập Hoa Hồng";
  }
  if (document.getElementById("sen").checked == true) {
    $(".hoalan").css("display", "none");
    $(".hoahong").css("display", "none");
    $(".hoadai").css("display", "none");
    $(".hoasen").css("display", "block");
    $(".hoakhac").css("display", "none");
    document.getElementById("change-title").innerHTML = "Bộ sưu tập Hoa Sen";
  }
  if (document.getElementById("dai").checked == true) {
    $(".hoalan").css("display", "none");
    $(".hoahong").css("display", "none");
    $(".hoadai").css("display", "block");
    $(".hoasen").css("display", "none");
    $(".hoakhac").css("display", "none");
    document.getElementById("change-title").innerHTML = "Bộ sưu tập Hoa Dại";
  }
  if (document.getElementById("khac").checked == true) {
    $(".hoalan").css("display", "none");
    $(".hoahong").css("display", "none");
    $(".hoadai").css("display", "none");
    $(".hoasen").css("display", "none");
    $(".hoakhac").css("display", "block");
    document.getElementById("change-title").innerHTML = "Các hoa khác";
  }

  $(".radio-container").ready(function() {
    $("#lan").focus(function() {
      document.getElementById("lan").checked == true;
    });

    $('.filter').click(function() {
      if (document.getElementById("all").checked == true) {
        $(".hoalan").css("display", "block");
        $(".hoahong").css("display", "block");
        $(".hoadai").css("display", "block");
        $(".hoasen").css("display", "block");
        $(".hoakhac").css("display", "block");
        document.getElementById("change-title").innerHTML = "Tất cả sản phẩm";
      }
      if (document.getElementById("lan").checked == true) {
        $(".hoalan").css("display", "block");
        $(".hoahong").css("display", "none");
        $(".hoadai").css("display", "none");
        $(".hoasen").css("display", "none");
        $(".hoakhac").css("display", "none");
        document.getElementById("change-title").innerHTML =
          "Bộ sưu tập Hoa Lan";
      }
      if (document.getElementById("hong").checked == true) {
        $(".hoalan").css("display", "none");
        $(".hoahong").css("display", "block");
        $(".hoadai").css("display", "none");
        $(".hoasen").css("display", "none");
        $(".hoakhac").css("display", "none");
        document.getElementById("change-title").innerHTML =
          "Bộ sưu tập Hoa Hồng";
      }
      if (document.getElementById("sen").checked == true) {
        $(".hoalan").css("display", "none");
        $(".hoahong").css("display", "none");
        $(".hoadai").css("display", "none");
        $(".hoasen").css("display", "block");
        $(".hoakhac").css("display", "none");
        document.getElementById("change-title").innerHTML =
          "Bộ sưu tập Hoa Sen";
      }
      if (document.getElementById("dai").checked == true) {
        $(".hoalan").css("display", "none");
        $(".hoahong").css("display", "none");
        $(".hoadai").css("display", "block");
        $(".hoasen").css("display", "none");
        $(".hoakhac").css("display", "none");
        document.getElementById("change-title").innerHTML =
          "Bộ sưu tập Hoa Dại";
      }
      if (document.getElementById("khac").checked == true) {
        $(".hoalan").css("display", "none");
        $(".hoahong").css("display", "none");
        $(".hoadai").css("display", "none");
        $(".hoasen").css("display", "none");
        $(".hoakhac").css("display", "block");
        document.getElementById("change-title").innerHTML = "Các hoa khác";
      }
    });
    var filteroffset = $(".filter").offset().top;

    $(window).scroll(function() {
      if (filteroffset <= window.pageYOffset) {
        $(".filter").addClass("filter-onscroll");
        $(".filter-show").addClass("filter-show-onscroll");
        $(".filter-decoy").css("display", "block");
      } else {
        $(".filter").removeClass("filter-onscroll");
        $(".filter-show").removeClass("filter-show-onscroll");
        $(".filter-decoy").css("display", "none");
      }
    });

    if ($(window).width() < 710) {
      $(".filter").css("left", "-250px");
      $(".filter-show").click(showclick);
        $('.filter').click(showclick);
        function showclick() {
        if (parseInt($(".filter").css("left")) == 0) {
          $(".filter-show").css("left", "0");
          $(".filter").css("left", "-250px");
        } else {
          $(".filter-show").css("left", "250px");
          $(".filter").css("left", "0px");
        }
      }
    } else {
      $(".filter").css("left", "0px");
    }

    $(window).resize(function() {
      if ($(window).width() < 710) {
        $(".filter").css("left", "-250px");
      } else {
        $(".filter").css("left", "0px");
      }
      this.off();
    });

    $(".showroom-subimg > img").css("opacity", "0.5");
    $(".showroom-subimg > img")
      .first()
      .css("opacity", "1");

    $(".product-inf").click(function() {
      $("html").css("overflow", "hidden");
      $(".showroom").css("display", "grid");
      var showlength = $(".product-show > img", this).length;
      for (var i = 1; i < showlength + 1; i++) {
        $(".showroom-subimg > img:nth-of-type(" + i + ")").attr(
          "src",
          $(".product-show > img:nth-of-type(" + i + ")", this).attr("src")
        );
      }
      for (var i = showlength + 1; i < 5; i++) {
        $(".showroom-subimg > img:nth-of-type(" + i + ")").css(
          "display",
          "none"
        );
      }
      var mainsrc = $(".showroom-subimg > img")
        .first()
        .attr("src");
      $(".showroom-mainimg > img").attr("src", mainsrc);
      $(".showroom-subimg > img")
        .first()
        .css("opacity", "1");
      $(".showroom-subimg > img")
        .not(":first()")
        .css("opacity", "0.5");
    });

    $(".showroom-subimg > img").click(function() {
      $(this).css("opacity", "1");
      $(".showroom-subimg > img")
        .not(this)
        .css("opacity", "0.5");
      $(".showroom-mainimg > img").attr("src", $(this).attr("src"));
    });

    $(".close-button").click(function() {
      $(".showroom").css("display", "none");
      $("html").css("overflow", "auto");
      for (var i = 1; i < 5; i++) {
        $(".showroom-subimg > img:nth-of-type(" + i + ")").css(
          "display",
          "block"
        );
      }
    });
  });
  
  $('#searchinput').keyup(function () { 
    var input, filter, myinf, txtValue;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    myinf = document.querySelectorAll('.product-inf');
    for (var i = 0; i < myinf.length;i++){
      txtValue = myinf[i].innerText;
      console.log(txtValue);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        myinf[i].style.display = '';
      } else {
        myinf[i].style.display = 'none';
      }
    }
  });
});
