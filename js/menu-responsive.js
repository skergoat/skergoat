$(function() {

	// open / close 

	$('.hamburger').click(function(e) {

		e.preventDefault();

		if($(this).hasClass('responsive')){	

			$('nav').animate({'height':'55px'}, 300);

			// toggle button

			$('.hamburger').css('transition', '0.2s ease-in-out').css('margin-top', '-=10px');
			$('#slice-1').css('transition', '0.2s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');
			$('#slice-2').css('transition', '0.2s ease-in-out').css('transform', 'translateX(0px)').fadeIn(50);
			$('#slice-3').css('transition', '0.2s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');

			if($('#go-left').position().left == -100 && $('body').attr('id') != '1') {

				$('#go-left').css({'transition':'0.2s', 'left':'0px'});
				$('#go-right').css({'transition':'0.2s', 'right':'0px'});
			}

		}
		else {

			// toggle button 

			$('.hamburger').css('transition', '0.2s ease-in-out').css('margin-top', '+=10px');
			$('#slice-1').css('transition', '0.2s ease-in-out').css('transform', 'rotate(43deg) translateY(6px)');
			$('#slice-2').css('transition', '0.2s ease-in-out').css('transform', 'translateX(100px)').fadeOut(50);
			$('#slice-3').css('transition', '0.2s ease-in-out').css('transform', 'rotate(-43deg) translateY(-6px)');

			$('nav').animate({'height': '345px'}, 300);

			if($('#go-left').position().left == 0) {

				$('#go-left').css({'transition':'0.2s', 'left':'-100px'});
				$('#go-right').css({'transition':'0.2s', 'right':'-100px'});
			}

		}

		$(this).toggleClass('responsive');

	});

});