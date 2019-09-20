$(function() {
    $(window).scroll(function(c) {
        var n = $(this).scrollLeft();
        $("#background-0").css("left", -.5 * n + "px")
    })
});