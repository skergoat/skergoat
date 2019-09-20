$(window).bind("load", function() {
    function e() {
        $("body").hasClass("offWheel") || (new Date - i < s ? setTimeout(e, s) : (t = !1, $("body").removeClass("resize")))
    }

    function a(e) {
        var a = e.left;
        $("html, body").animate({
            scrollLeft: a + "px"
        }, 0)
    }
    var i, t = !1,
        s = 200;
    $(window).resize(function() {
        var n = $("body").attr("id"),
            o = $("#info-name").text(),
            h = $(o + " .page").attr("id"),
            d = $("#" + h).height();
        if ($("#main-2").css({
                "max-height": d,
                height: d
            }), $("body").hasClass("offWheel")) {
            if ($("#span-info").hasClass("who")) l = $("#sub-1").position();
            else var l = $("#sub-" + n).position();
            a(l)
        } else {
            $("body").addClass("resize"), a(l = $("#section-" + n).position()), i = new Date, !1 === t && (t = !0, setTimeout(e, s))
        }
        var r = $(window).width();
        $(".hamburger").hasClass("responsive") ? (r > 780 && $("nav").animate({
            height: "90px"
        }, 0), r < 780 && $("nav").animate({
            height: "345px"
        }, 0)) : (r > 780 && $("nav").animate({
            height: "90px"
        }, 0), r <= 780 && $("nav").animate({
            height: "55px"
        }, 0))
    })
});