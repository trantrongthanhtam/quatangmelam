$(document).ready(function () {
    $(".quote").css("left", "-5vw");
    $(".mid-quote").css("height", "0px");
    $(".mid-quote").css("padding", "0px");
    var heightvalue = parseInt($(".background").css("height"), 10);
    var heightvalue2 = $(window).height();
    if (heightvalue >= heightvalue2) {
        $(".homeheader").css("height", heightvalue2 + "px");
    } else {
        $(".homeheader").css("height", heightvalue);
    }
    $(".quote").css("top", parseInt($(".homeheader").css("height"), 10) / 2 - 30);
    
    
    
    
    
    
    $(window).resize(function () {
        heightvalue = parseInt($(".background").css("height"), 10);
        heightvalue2 = $(window).height();
        if (heightvalue >= heightvalue2) {
            $(".homeheader").css("height", heightvalue2 + "px");
        } else {
            $(".homeheader").css("height", heightvalue);
        }
        $(".quote").css(
            "top",
            parseInt($(".homeheader").css("height"), 10) / 2 - 30
        );
    });
    
    
    
    
    
    $(window).scroll(function () {
        var midquote = $(".mid-quote").offset().top;
        var spanoffset = $(".product").offset().top;
        var catalogoffset = $(".catalog").offset().top;
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
        $('.background').css('top', $(window).scrollTop()/2);

    });







    $("#icon-menu").click(function () {
        if (parseInt($(".header-menu").css("right")) != 0) {
            $(".header-menu").css("right", "0px");
            $("#icon-menu").css("right", "80px");
        } else {
            $(".header-menu").css("right", "-200px");
            $("#icon-menu").css("right", "20px");
        }
    });

    
    
    
    $('.showroom-subimg > img').css('opacity', '0.5');
    $('.showroom-subimg > img').first().css('opacity', '1');






    $('.product').click(function () {
        $('html').css('overflow', 'hidden');
        $('.showroom').css('display', 'grid');
        var showlength = $('.product-show > img', this).length;
        for (var i = 1; i < showlength + 1; i++) {
            $('.showroom-subimg > img:nth-of-type(' + i + ')').attr('src', $('.product-show > img:nth-of-type(' + i + ')', this).attr('src'));
        };
        for (var i = showlength + 1; i < 5; i++) {
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
            for (var i = 1; i < 5; i++) {
                $(".showroom-subimg > img:nth-of-type(" + i + ")").css(
                    "display",
                    "block"
                );
            }
        }
        var imgclick = true;
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
