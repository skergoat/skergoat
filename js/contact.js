$(function() {
    $(".GetinTouch").click(function() {
        $(".sub").not("#sub-6").fadeOut(1e3), $("#sub-6").fadeIn(1e3);
        var t = $("#page-6").height();
        $("#main-2").css({
            "max-height": t + "px",
            height: t + "px"
        }), $("#input-1").addClass("active"), $("#info-name").text("#sub-6"), $("html, body").animate({
            scrollLeft: "0px",
            scrollTop: "0px"
        }, 0), $(".sub").not("#sub-6").css("display", "none")
    })
});