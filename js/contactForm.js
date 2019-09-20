document.addEventListener("wpcf7submit", function(t) {
    var e = $(document).height();
    $("#main-2").animate({
        height: e + "px",
        "max-height": e + "px"
    }, 0)
}), document.addEventListener("wpcf7mailsent", function(t) {
    $(".wpcf7-mail-sent-ok").text("").css({
        height: "0px",
        width: "0px",
        margin: "0px",
        padding: "0px"
    }), $(".wpcf7-mail-sent-ok").hide(0), $("#thanks").css("display", "flex");
    var e = $("#thanks").height(),
        i = $("#main-2").height();
    new_height = i + e, $("#main-2").animate({
        height: new_height + "px",
        "max-height": new_height + "px"
    }, 0);
    $("#thanks").height();
    var n = $("#thanks").offset().top;
    $("html, body").animate({
        scrollTop: n + 50 + "px"
    }, 300), setTimeout(function() {
        $("#thanks").position();
        $("html, body").animate({
            scrollTop: n.top + "px"
        }, 0), $("#main-2").animate({
            height: e + "px",
            "max-height": e + "px"
        }, 0), $("form").css("display", "none"), $(".arrowAndUp").css("display", "none")
    }, 300)
}, !1);