$(function() {

	$('.right').click(function() {

		var data_url = $(this).attr('data-url');
		var position = $(data_url).position();
		var left = position.left;

		$('html, body').animate({ 
			scrollLeft:left + "px" 	
		}, 300);

	});

});
