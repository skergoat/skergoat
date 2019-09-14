$(function() {

	$(window).scroll(function(e) {

		var scrollLeft = $(this).scrollLeft();
	  	$('#background-0').css('left', - (scrollLeft * 0.5) + 'px');

	});

});