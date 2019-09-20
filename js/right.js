$(function() {
    $(".right").click(function() {
        var t = $(this).attr("data-url"),
            i = $(t).position().left;
        $("html, body").animate({
            scrollLeft: i + "px"
        }, 300)
    })
});