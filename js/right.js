$(function() {

	$(".right").click(function() {

		var width = $(window).width();

		if(width > 450) {

	        var t = $(this).attr("data-url"),
	            i = $(t).position().left;
	        $("html, body").animate({
	            scrollLeft: i + "px"
	        }, 300)

		}
		else {

	        var t = $(this).attr("data-url"),
	            i = $(t).position().top;
	        $("html, body").animate({
	            scrollTop: i + "px"
	        }, 300)
		}  

	})

});