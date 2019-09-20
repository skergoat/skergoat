$(function() {
    $(".hamburger").click(function(s) {
        s.preventDefault(), $(this).hasClass("responsive") ? ($("nav").animate({
            height: "55px"
        }, 300), $(".hamburger").css("transition", "0.2s ease-in-out").css("margin-top", "-=10px"), $("#slice-1").css("transition", "0.2s ease-in-out").css("transform", "rotate(0deg) translateY(0px)"), $("#slice-2").css("transition", "0.2s ease-in-out").css("transform", "translateX(0px)").fadeIn(50), $("#slice-3").css("transition", "0.2s ease-in-out").css("transform", "rotate(0deg) translateY(0px)"), -100 == $("#go-left").position().left && "1" != $("body").attr("id") && ($("#go-left").css({
            transition: "0.2s",
            left: "0px"
        }), $("#go-right").css({
            transition: "0.2s",
            right: "0px"
        }))) : ($(".hamburger").css("transition", "0.2s ease-in-out").css("margin-top", "+=10px"), $("#slice-1").css("transition", "0.2s ease-in-out").css("transform", "rotate(43deg) translateY(6px)"), $("#slice-2").css("transition", "0.2s ease-in-out").css("transform", "translateX(100px)").fadeOut(50), $("#slice-3").css("transition", "0.2s ease-in-out").css("transform", "rotate(-43deg) translateY(-6px)"), $("nav").animate({
            height: "345px"
        }, 300), 0 == $("#go-left").position().left && ($("#go-left").css({
            transition: "0.2s",
            left: "-100px"
        }), $("#go-right").css({
            transition: "0.2s",
            right: "-100px"
        }))), $(this).toggleClass("responsive")
    })
});