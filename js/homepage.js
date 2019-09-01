$(document).ready(function () {
    $(".quote").css("left", "-5vw");
    $(".mid-quote").css("height", "0px");
    $(".mid-quote").css("padding", "0px");
    let viewPortHeight = $(window).height();
    let viewPortWidth = $(window).width();
    if (viewPortWidth < (viewPortHeight / 531 * 800)) {
        $(".homeheader").css("height", viewPortWidth / 800 * 531 + "px");
    } else {
        $(".homeheader").css("height", viewPortHeight);
    }
    $(".quote").css("top", parseInt($(".homeheader").css("height"), 10) / 2 - 30);


    $(window).resize(function () {
        let viewPortHeight = $(window).height();
        let viewPortWidth = $(window).width();
        if (viewPortWidth < (viewPortHeight / 531 * 800)) {
            $(".homeheader").css("height", viewPortWidth / 800 * 531 + "px");
        } else {
            $(".homeheader").css("height", viewPortHeight);
        }
        $(".quote").css("top", parseInt($(".homeheader").css("height"), 10) / 2 - 30);
    });





    $(window).scroll(function () {
        let midquote = $(".mid-quote").offset().top;
        let spanoffset = $(".product").offset().top;
        let catalogoffset = $(".catalog").offset().top;
        if (midquote < $(window).scrollTop() + 550) {
            $(".mid-quote").css("height", "20vh");
            $(".mid-quote").css("padding", "10px 30px 10px 30px");
        }
        if (catalogoffset < $(window).scrollTop() + 550) {
            $(".catalog-title").css("opacity", "1");
        }
        if (spanoffset < $(window).scrollTop() + 250) {
            $(".product>span").css("height", "25%");
        }
        $('.background').css('top', $(window).scrollTop() / 2);

    });



    $("#icon-menu").click(function (event) {
        event.stopPropagation();
        if (parseInt($(".header-menu").css("right")) != 0) {
            $(".header-menu").css("right", "0px");
            $("#icon-menu").css("right", "80px");
        } else {
            $(".header-menu").css("right", "-200px");
            $("#icon-menu").css("right", "20px");
        }
    });

    const bodyEl = document.querySelector("body");

    bodyEl.addEventListener("click", (event) => {
        if (event.target.closest(".header-menu") == null) {
            $(".header-menu").css("right", "-200px");
            $("#icon-menu").css("right", "20px");
        };
    });

    $('.showroom-subimg > img').css('opacity', '0.5');
    $('.showroom-subimg > img').first().css('opacity', '1');


    $('.product').click(function () {
        $('html').css('overflow', 'hidden');
        $('.showroom').css('display', 'grid');
        let showlength = $('.product-show > img', this).length;
        for (let i = 1; i < showlength + 1; i++) {
            $('.showroom-subimg > img:nth-of-type(' + i + ')').attr('src', $('.product-show > img:nth-of-type(' + i + ')', this).attr('src'));
        };
        for (let i = showlength + 1; i < 5; i++) {
            $('.showroom-subimg > img:nth-of-type(' + i + ')').css('display', 'none');
        };
        var mainsrc = $('.showroom-subimg > img').first().attr('src');
        $('.showroom-mainimg > img').attr('src', mainsrc);
        $('.showroom-subimg > img').first().css('opacity', '1');
        $('.showroom-subimg > img').not(':first()').css('opacity', '0.5');
    });



    $('.showroom-subimg > img').click(function () {
        $(this).css('opacity', '1');
        $('.showroom-subimg > img').not(this).css('opacity', '0.5');
        $('.showroom-mainimg > img').attr('src', $(this).attr('src'));
    });


    $(".close-button").click(closeclick);

    function closeclick() {
        $(".showroom").css("display", "none");
        $("html").css("overflow", "auto");
        for (let i = 1; i < 5; i++) {
            $(".showroom-subimg > img:nth-of-type(" + i + ")").css(
                "display",
                "block"
            );
        }
    }
    let imgclick = true;
    $('.showroom').click(function () {
        $('.showroom > div > img').click(function () {
            imgclick = true;
        });
        if (imgclick == false) {
            closeclick();
        }
        imgclick = false;
    });
});
