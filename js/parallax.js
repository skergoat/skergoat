$(function() {

	$(window).scroll(function(c) {

		var width = $(window).width();

		if(width > 450) {

		//     var n = $(this).scrollTop();
	 //        $("#background-0").css("top", -.5 * n + "px");
	 //        $("#background-0").css("left", "0px");

		// } else {

			$("#background-0").css("top", "0px");

	        var n = $(this).scrollLeft();
		    $("#background-0").css("left", -.5 * n + "px");
		}

	});

	// $(window).resize(function(c) { 

	// 	var width = $(window).width();

	// 	if(width > 450) {

	// 	    var n = $(this).scrollLeft();
	// 	    $("#background-0").css("left", "0px");

	// 	} else {

	//         var n = $(this).scrollTop();
	//         $("#background-0").css("top", "0px");
	//         $("#background-0").css("left", "0px");
	// 	}

	// });

});