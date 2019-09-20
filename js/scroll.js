$(function() {
    class t {
        constructor(t, a) {
            this.message1 = t, this.message2 = a
        }
        bubleBig() {
            $(".bulle-container").removeClass("buble-container-top"), $(".bulle").removeClass("buble-top"), $(".avatar-small").removeClass("avatar-small"), $(".container-avatar").removeClass("container-avatar-small"), $(".bulle-content").removeClass("bulle-content-small"), $(".triangle").removeClass("triangle-small")
        }
        bubleSmall() {
            $(".bulle-container").addClass("buble-container-top"), $(".bulle").addClass("buble-top"), $(".avatar").addClass("avatar-small"), $(".container-avatar").addClass("container-avatar-small"), $(".bulle-content").addClass("bulle-content-small"), $(".triangle").addClass("triangle-small")
        }
        textBig() {
            $(".bulle-content-p").removeClass("bulle-content-p-small"), $("#bonjour").css({
                "padding-bottom": "25px",
                "padding-top": "0px"
            }).text("").text(this.message1), $("#je-suis-stephane").css("padding-bottom", "50px").text("").text(this.message2), $("#createur-de-site-web").removeClass("display")
        }
        textSmall() {
            $(".bulle-content-p").addClass("bulle-content-p-small"), $("#createur-de-site-web").addClass("display"), $("#bonjour").text("").text(this.message1), $("#je-suis-stephane").css("padding-bottom", "0px").text("").text(this.message2)
        }
        buttonBig() {
            $(".action").removeClass("display").removeClass("button-small")
        }
        buttonMedium() {
            $(".action").removeClass("display").addClass("button-small")
        }
        buttonSmall() {
            $(".action").addClass("display").removeClass("button-small")
        }
        constraint1() {
            $(".bulle-container").hasClass("buble-container-top") || $(".bulle-container").addClass("buble-container-top"), $(".bulle").hasClass("buble-top") || $(".bulle").addClass("buble-top"), $(".avatar").hasClass("avatar-small") || $(".avatar").addClass("avatar-small"), $(".bulle-content").hasClass("bulle-content-small") || $(".bulle-content").addClass("bulle-content-small"), $(".container-avatar").hasClass("container-avatar-small") || $(".container-avatar").addClass("container-avatar-small"), $(".triangle").hasClass("triangle-small") || $(".triangle").addClass("triangle-small")
        }
        constraint2() {
            $(".bulle-container").hasClass("buble-container-top") && $(".bulle-container").removeClass("buble-container-top"), $(".bulle").hasClass("buble-top") && $(".bulle").removeClass("buble-top"), $(".avatar-small").hasClass("avatar-small") && $(".avatar-small").removeClass("avatar-small"), $(".bulle-content").hasClass("bulle-content-small") && $(".bulle-content").removeClass("bulle-content-small"), $(".container-avatar").hasClass("container-avatar-small") && $(".container-avatar").removeClass("container-avatar-small"), $(".triangle").hasClass("triangle-small") && $(".triangle").removeClass("triangle-small")
        }
    }
    var a = $(this).scrollLeft(),
        e = $("#main").css("width");
    e = parseInt(e);
    var s = $(".section").width(),
        l = e - ((s = parseInt(s)) + 4);
    a >= l && $(".scroll-flex").addClass("hide-scroll"), a < l && $(".scroll-flex").removeClass("hide-scroll"), $("#example-one").append("<li id='magic-line'></li>");
    var o, n = $("#magic-line");

    function i(t) {
        n.css({
            transition: "0.2s ease-in-out",
            left: $(t).position().left,
            width: $(t).parent().width()
        })
    }(n.width($(".current_page_item").width()).css("left", $(".current_page_item a").position().left), a > -1 && a <= .25 * s) && ((o = new t).bubleBig(), (o = new t("Bonjour !", "Je suis Stéphane")).textBig(), o.buttonBig(), $("#button-buble-1").show(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "1"), $("#go-left").attr("data-url", "#section-1"), $("#go-right").attr("data-url", "#section-2"));
    a >= .25 * s && a <= 2 * s * 80 / 100 && ((o = new t).bubleSmall(), (o = new t("Vous voulez être présent sur le web ?", "Je gère votre :")).textSmall(), $("#bonjour").css({
        "padding-bottom": "10px",
        "padding-top": "0px"
    }), $("#je-suis-stephane").hasClass("display") && $("#je-suis-stephane").removeClass("display"), $(".action").addClass("display"), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "2"), $("#go-left").attr("data-url", "#section-1"), $("#go-right").attr("data-url", "#section-3"));
    a >= 2 * s * 80 / 100 && a <= 3 * s && ((o = new t).constraint1(), (o = new t("Mon travail se resume en 3 points :")).textSmall(), $("#bonjour").css({
        "padding-bottom": "0px",
        "padding-top": "0px"
    }), $(".action").hasClass("display") || $("body").hasClass("offWheel") || $(".action").addClass("display"), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "3"), $("#go-left").attr("data-url", "#section-2"), $("#go-right").attr("data-url", "#section-4"));
    a >= 3 * s * 85 / 100 && a <= 4 * s && ((o = new t).bubleBig(), (o = new t("Vous envisagez une collaboration ?", "Nous procédons en 5 étapes :")).textBig(), $("#je-suis-stephane").removeClass("display"), $("#createur-de-site-web").addClass("display"), o.buttonMedium(), $("#button-buble-1").hide(0), $("#button-buble-2").show(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "4"), $("#go-left").attr("data-url", "#section-3"), $("#go-right").attr("data-url", "#section-5"));
    a >= 4 * s * 90 / 100 && a <= 5 * s && ((o = new t).constraint2(), (o = new t("Avant d'aller plus loin", "Voudriez-vous voir mon travail ?")).textBig(), $("#je-suis-stephane").removeClass("display"), $("#createur-de-site-web").addClass("display"), o.buttonMedium(), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").show(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "5"), $("#go-left").attr("data-url", "#section-4"), $("#go-right").attr("data-url", "#section-6"));
    a >= 5 * s * 90 / 100 && a <= 6 * s && ((o = new t).bubleSmall(), $(".bulle-container").removeClass("buble-container-top"), (o = new t("Vous souhaitez qu'on travaille ensemble ?")).textSmall(), $("#bonjour").css({
        "padding-bottom": "0px"
    }), $("#je-suis-stephane").addClass("display"), o.buttonSmall(), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "6"), $("#go-left").attr("data-url", "#section-5"), $("#go-right").attr("data-url", "#section-6"));
    $(window).scroll(function(a) {
        var e, s = $(this).width(),
            l = $(this).scrollLeft(),
            o = $("#main").css("width");
        o = parseInt(o);
        var r = $(".section").width(),
            b = o - ((r = parseInt(r)) + 4);
        l >= b && $(".scroll-flex").addClass("hide-scroll"), l < b && $(".scroll-flex").removeClass("hide-scroll");
        var d, u = n.position().left,
            c = $("#item-3").position().left,
            h = $("#item-4").position().left;
        (u > c && u < h ? (n.css({
            opacity: "0",
            "list-style-type": "none",
            transition: "0.1s ease-in-out"
        }), setTimeout(function() {
            0 == n.css("opacity") && n.css({
                opacity: "1",
                "list-style-type": "none",
                transition: "0.1s ease-in-out"
            })
        }, 200)) : n.css({
            opacity: "1",
            "list-style-type": "none",
            transition: "0.1s ease-in-out"
        }), l > -1 && l <= .25 * r) && (i("#item-1"), (d = new t).bubleBig(), (d = new t("Bonjour !", "Je suis Stéphane")).textBig(), d.buttonBig(), $("#button-buble-1").show(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "1"), $("#go-left").attr("data-url", "#section-1"), $("#go-right").attr("data-url", "#section-2"), $("#main").css({
            transition: "0.3s",
            background: "transparent"
        }));
        l >= .25 * r && l <= 2 * r * 80 / 100 && (i("#item-2"), (d = new t).bubleSmall(), (d = new t("Vous voulez être présent sur le web ?", "Je gère votre :")).textSmall(), $("#bonjour").css({
            "padding-bottom": "10px",
            "padding-top": "0px"
        }), $("#je-suis-stephane").hasClass("display") && $("#je-suis-stephane").removeClass("display"), $(".action").addClass("display"), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "2"), $("#go-left").attr("data-url", "#section-1"), $("#go-right").attr("data-url", "#section-3"), $("#main").css({
            transition: "0.3s",
            background: "#EB5F74"
        }));
        l >= 2 * r * 80 / 100 && l <= 3 * r && (i("#item-3"), (d = new t).constraint1(), (d = new t("Mon travail se résume en 3 points :")).textSmall(), $("#bonjour").css({
            "padding-bottom": "0px",
            "padding-top": "0px"
        }), $("#bonjour").css({
            "padding-bottom": "0px"
        }), $(".action").hasClass("display") || $(".action").addClass("display"), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "3"), $("#go-left").attr("data-url", "#section-2"), $("#go-right").attr("data-url", "#section-4"), $("#main").css({
            transition: "0.3s",
            background: "#4DD5C0"
        }));
        (s > 400 && (e = 3 * r * 85 / 100), s < 400 && (e = 3 * r), l >= e && l <= 4 * r) && (i("#item-4"), (d = new t).bubleBig(), (d = new t("Vous envisagez une collaboration ?", "Nous procédons en 5 étapes :")).textBig(), $("#je-suis-stephane").removeClass("display"), $("#createur-de-site-web").addClass("display"), d.buttonMedium(), $("#button-buble-1").hide(0), $("#button-buble-2").show(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "4"), $("#go-left").attr("data-url", "#section-3"), $("#go-right").attr("data-url", "#section-5"), $("#main").css({
            transition: "0.3s",
            background: "#FADC6F"
        }));
        l >= 4 * r * 90 / 100 && l <= 5 * r && (i("#item-5"), (d = new t).constraint2(), (d = new t("Avant d'aller plus loin", "Voudriez-vous voir mon travail ?")).textBig(), $("#je-suis-stephane").removeClass("display"), $("#createur-de-site-web").addClass("display"), d.buttonMedium(), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "5"), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").show(0), $("#go-left").attr("data-url", "#section-4"), $("#go-right").attr("data-url", "#section-6"), $("#main").css({
            transition: "0.3s",
            background: "#459CE7"
        }));
        l >= 5 * r * 90 / 100 && l <= 6 * r && (i("#item-6"), (d = new t).bubleSmall(), $(".bulle-container").removeClass("buble-container-top"), (d = new t("Vous souhaitez qu'on travaille ensemble ?")).textSmall(), $("#bonjour").css({
            "padding-bottom": "0px"
        }), $("#je-suis-stephane").addClass("display"), d.buttonSmall(), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "6"), $("#go-left").attr("data-url", "#section-5"), $("#go-right").attr("data-url", "#section-6"), $("#main").css({
            transition: "0.3s",
            background: "#4DD5C0"
        }))
    })
});