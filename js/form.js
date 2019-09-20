(function() {
    $("#thanks").css("display", "none");
    var t = 0,
        a = 0;
    $("form p").each(function(a) {
        t++, $(this).attr("id", "input-" + t).addClass("inputs").css("margin-bottom", "400px").append('<button class="button-form" id="' + t + '" data-url="#input-' + (t + 1) + '">suivant</button>')
    }), $(".wpcf7-form-control").each(function() {
        a++, $(this).attr("data-url", "#input-" + a)
    }), $("#input-1").addClass("active").prepend('<h4 style="font-weight:bold;padding-bottom:30px;">Pour commencer, faisons connaissance : </h4>'), $("#input-6 button").remove(), $("#input-6").css("margin-bottom", "300px"), $(".button-form").click(function(t) {
        t.preventDefault();
        var a, n = $(this).attr("id"),
            o = $(this).attr("data-url"),
            i = $(o).offset().top;
        return $("#input-" + n).removeClass("active"), $(o).addClass("active"), a = "#input-3" == o ? i - 100 : "#input-6" == o ? $(document).height() + 200 : i - 200, $("html, body").animate({
            scrollTop: a + "px"
        }, 300), !1
    }), $(".wpcf7-form-control").focus(function() {
        var t = $(this).attr("data-url");
        $(t).hasClass("active") || ($(".inputs").not(t).removeClass("active"), $(t).addClass("active"))
    })
});