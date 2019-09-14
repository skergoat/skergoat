$(function() {

	$('.right').click(function() {

		var data_url = $(this).attr('data-url');
		var position = $(data_url).position();
		var left = position.left;

		$('html, body').animate({ 
			scrollLeft:left + "px" 	
		}, 300);

		

		// return false;

	});

});


// if($('#go-right').attr('data-url') == '#section-3') {

// 			$('#go-left').animate({'left':'0px'}, 200);
// 			$('#go-right').animate({'right':'0px'}, 200);

// 		}
// 		if($('#go-right').attr('data-url') == '#section-2') {

// 			$('#go-left').animate({'left':'-100px'}, 200);
// 			$('#go-right').animate({'right':'-100px'}, 200);
// 		}