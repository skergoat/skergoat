$(function() {

	// form style and attr

	$('#thanks').css('display', 'none');
	
	var i = 0;
	var i2 = 0
	// var i3 = 0

	$('form p').each(function(e) {

		i++;

		 $(this).attr('id', 'input-' + i).addClass('inputs').css('margin-bottom', '400px').append('<button class="button-form" id="' + i + '" data-url="#input-' + (i + 1) + '">suivant</button>');

	});

	$('.wpcf7-form-control').each(function() {

		i2++;

		$(this).attr('data-url', '#input-' + i2);

	});

	$('#input-1').addClass('active').prepend('<h4 style="font-weight:bold;padding-bottom:30px;">Pour commencer, faisons connaissance : </h4>');
	$('#input-6 button').remove();
	$('#input-6').css('margin-bottom', '300px');


	$('.button-form').click(function(e) {

		e.preventDefault();

		var id = $(this).attr('id');
		var data = $(this).attr('data-url');
		var x = $(data).offset().top;

		// input opacity 
		$('#input-' + id).removeClass('active');
		$(data).addClass('active');

		// var width = $(window).width();

		var value;

		if(data == '#input-3') {

			value = x - 100;
		}
		else if(data == '#input-6') {

			value = $(document).height() + 200;
		}
		else {

			value = x - 200;
		}

		// scroll
		$('html, body').animate({ 
			scrollTop:(value) + "px" 	
		}, 300);

		return false;

	});

	$('.wpcf7-form-control').focus(function() {

		var data = $(this).attr('data-url');

		if(!$(data).hasClass('active')) {

			$('.inputs').not(data).removeClass('active');
			$(data).addClass('active');
		}
		
	});

});