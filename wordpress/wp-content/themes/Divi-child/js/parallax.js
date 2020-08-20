$(function() {

	$(window).scroll(function(c) {

		var width = $(window).width();

		if(width > 450) {

			$("#background-0").css("top", "0px");

	        var n = $(this).scrollLeft();
		    $("#background-0").css("left", -.5 * n + "px");
		}

	});

});