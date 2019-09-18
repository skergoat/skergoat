
$(function() {

	class Buble {

		constructor(message1, message2) {

			this.message1 = message1;
			this.message2 = message2;
		}

		bubleBig() {

			$('.bulle-container').removeClass('buble-container-top'); 
			$('.bulle').removeClass('buble-top');
			$('.avatar-small').removeClass('avatar-small');
			$('.container-avatar').removeClass('container-avatar-small');
			$('.bulle-content').removeClass('bulle-content-small');
			$('.triangle').removeClass('triangle-small');

		}

		bubleSmall() {

			$('.bulle-container').addClass('buble-container-top'); 
			$('.bulle').addClass('buble-top');
			$('.avatar').addClass('avatar-small');
			$('.container-avatar').addClass('container-avatar-small');
			$('.bulle-content').addClass('bulle-content-small');
			$('.triangle').addClass('triangle-small');

		}

		textBig() {

			$('.bulle-content-p').removeClass('bulle-content-p-small');
			$('#bonjour').css({'padding-bottom': '25px', 'padding-top':'0px'}).text('').text(this.message1);
			$('#je-suis-stephane').css('padding-bottom', '50px').text('').text(this.message2);
			$('#createur-de-site-web').removeClass('display');
		}

		textSmall() {

			$('.bulle-content-p').addClass('bulle-content-p-small');
			$('#createur-de-site-web').addClass('display');
			$('#bonjour').text('').text(this.message1);
			$('#je-suis-stephane').css('padding-bottom', '0px').text('').text(this.message2);
			
		}

		buttonBig() {

			$('.action').removeClass('display').removeClass('button-small');
		}

		buttonMedium() {

			$('.action').removeClass('display').addClass('button-small');
		}

		buttonSmall() {

			$('.action').addClass('display').removeClass('button-small');
		}

		constraint1() {

			if(!$('.bulle-container').hasClass('buble-container-top')) {

				$('.bulle-container').addClass('buble-container-top');
			}

			if(!$('.bulle').hasClass('buble-top')) {

				$('.bulle').addClass('buble-top');
			}

			if(!$('.avatar').hasClass('avatar-small')) {

				$('.avatar').addClass('avatar-small');
			}

			if(!$('.bulle-content').hasClass('bulle-content-small')) {

				$('.bulle-content').addClass('bulle-content-small');
			}

			if(!$('.container-avatar').hasClass('container-avatar-small')) {

				$('.container-avatar').addClass('container-avatar-small')
			}

			if(!$('.triangle').hasClass('triangle-small')) {

				$('.triangle').addClass('triangle-small');
			}

		}

		constraint2() {

			if($('.bulle-container').hasClass('buble-container-top')) {

				$('.bulle-container').removeClass('buble-container-top');
			}

			if($('.bulle').hasClass('buble-top')) {

				$('.bulle').removeClass('buble-top');
			}

			if($('.avatar-small').hasClass('avatar-small')) {

				$('.avatar-small').removeClass('avatar-small');
			}

			if($('.bulle-content').hasClass('bulle-content-small')) {

				$('.bulle-content').removeClass('bulle-content-small');
			}

			if($('.container-avatar').hasClass('container-avatar-small')) {

				$('.container-avatar').removeClass('container-avatar-small');
			}

			if($('.triangle').hasClass('triangle-small')) {

				$('.triangle').removeClass('triangle-small');
			}
		}


	}

	// position scroll 
	var scrollLeft = $(this).scrollLeft();

	/***** finish *****/

	// width of main container 
	var body = $('#main').css('width'); 
	body = parseInt(body);

	// width of one section 
	var width = $('.section').width();
	width = parseInt(width);

	var finish = body - (width + 4); 

	// make "scroll" container disapear at the end of the page
	if(scrollLeft >= finish) {

		$('.scroll-flex').addClass('hide-scroll');
	}

	if(scrollLeft < finish) {

		$('.scroll-flex').removeClass('hide-scroll');
	}

	// menu line bottom

	var $el, leftPos, newWidth;
	$("#example-one").append("<li id='magic-line'></li>");

	var $magicLine = $("#magic-line");

	$magicLine
	  .width($(".current_page_item").width())
	  .css("left", $(".current_page_item a").position().left);

  	function toLeft(item) {

		$magicLine.css({

			transition:'0.2s ease-in-out',
	        left: $(item).position().left,
	        width: $(item).parent().width()

	    });

  	}

	/***** load *****/

	if(scrollLeft > -1 && scrollLeft <= width * (25 / 100)) {

		//bulle

		var buble = new Buble();
		buble.bubleBig();

		// text

		var buble = new Buble('Bonjour !', 'Je suis Stéphane');
		buble.textBig();
		
		// button

		buble.buttonBig();

		$('#button-buble-1').show(0);
		$('#button-buble-2').hide(0);
		$('#button-buble-3').hide(0);

		// body id

		if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

			$('body').attr('id', '1'); 
		}

		$('#go-left').attr('data-url', '#section-1');
		$('#go-right').attr('data-url', '#section-2');

		// button slide mobile

		// $('#go-left').attr('data-url', '#section-1').css({'transition':'0.2s', 'left':'-100px'});
		// $('#go-right').attr('data-url', '#section-2').css({'transition':'0.2s', 'right':'-100px'});


	}

	if(scrollLeft >= width * (25 / 100) && scrollLeft <= (width * 2 * 80 / 100)) {

		//bulle

		var buble = new Buble();
		buble.bubleSmall();
		
		// text

		var buble = new Buble('Vous voulez être présent sur le web ?', 'Je gère votre :');
		buble.textSmall();
		$('#bonjour').css({'padding-bottom': '10px', 'padding-top':'0px'});

		if($('#je-suis-stephane').hasClass('display')) {

			$('#je-suis-stephane').removeClass('display');
		}

		// button 

		$('.action').addClass('display');

		$('#button-buble-1').hide(0);
		$('#button-buble-2').hide(0);
		$('#button-buble-3').hide(0);


		// body id

		if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

			$('body').attr('id', '2'); 

		}

		// button slide mobile 

		// if(!$('.hamburger').hasClass('responsive')) {

		// 	$('#go-left').css({'transition':'0.2s', 'left':'0px'});
		// 	$('#go-right').css({'transition':'0.2s', 'right':'0px'});

		// }

		$('#go-left').attr('data-url', '#section-1');
		$('#go-right').attr('data-url', '#section-3');
		
	}

	if(scrollLeft >= (width * 2 * 80 / 100) && scrollLeft <= (width * 3)) {

		//bulle

		var buble = new Buble();
		buble.constraint1();

		// text

		var buble = new Buble('Mon travail se resume en 3 points :');
		buble.textSmall();
		$('#bonjour').css({'padding-bottom': '0px', 'padding-top':'0px'})

		// button 

		if(!$('.action').hasClass('display') && !$('body').hasClass('offWheel')) {

			$('.action').addClass('display');
		}

		$('#button-buble-1').hide(0);
		$('#button-buble-2').hide(0);
		$('#button-buble-3').hide(0);

		// body id

		if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

			$('body').attr('id', '3'); 

		}

		// button slide mobile 

		$('#go-left').attr('data-url', '#section-2');
		$('#go-right').attr('data-url', '#section-4');

	}

	if(scrollLeft >= (width * 3 * 85 / 100) && scrollLeft <= (width * 4)) {

		//bulle

		var buble = new Buble();
		buble.bubleBig();
		
		// text

		var buble = new Buble('Vous envisagez une collaboration ?', 'Nous procédons en 5 étapes :');
		buble.textBig();

		$('#je-suis-stephane').removeClass('display');
		$('#createur-de-site-web').addClass('display');

		// button 

		buble.buttonMedium();



		$('#button-buble-1').hide(0);
		$('#button-buble-2').show(0);
		$('#button-buble-3').hide(0);


		// body id

		if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

			$('body').attr('id', '4');

		} 

		// button slide mobile 

		$('#go-left').attr('data-url', '#section-3');
		$('#go-right').attr('data-url', '#section-5');

	}

	if(scrollLeft >= (width * 4 * 90 / 100) && scrollLeft <= (width * 5)) {

		//bulle

		var buble= new Buble();
		buble.constraint2();

		// text

		var buble = new Buble('Avant d\'aller plus loin', 'Voudriez-vous voir mon travail ?');
		buble.textBig();

		$('#je-suis-stephane').removeClass('display');
		$('#createur-de-site-web').addClass('display');

		// button

		buble.buttonMedium();

		$('#button-buble-1').hide(0);
		$('#button-buble-2').hide(0);
		$('#button-buble-3').show(0);		

		// body id

		if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

			$('body').attr('id', '5'); 

		}

		// button slide mobile 

		$('#go-left').attr('data-url', '#section-4');
		$('#go-right').attr('data-url', '#section-6');

	}

	if(scrollLeft >= (width * 5 * 90 / 100) && scrollLeft <= (width * 6)) {

		//bulle

		var buble = new Buble();
		buble.bubleSmall();
		
		$('.bulle-container').removeClass('buble-container-top'); 

		// text

		var buble = new Buble('Vous souhaitez qu\'on travaille ensemble ?');
		buble.textSmall();

		$('#bonjour').css({'padding-bottom': '0px'});
		$('#je-suis-stephane').addClass('display');

		// button

		buble.buttonSmall();

		$('#button-buble-1').hide(0);
		$('#button-buble-2').hide(0);
		$('#button-buble-3').hide(0);

		// body id

		if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

			$('body').attr('id', '6'); 

		}

		// button slide mobile 

		$('#go-left').attr('data-url', '#section-5');
		$('#go-right').attr('data-url', '#section-6');
	}

	var i = 0;

	$(window).scroll(function(e) {

		var windoWidth = $(this).width();
		var value;

		// position scroll 
		var scrollLeft = $(this).scrollLeft();

		/***** finish *****/

		// width of main container 
		var body = $('#main').css('width'); 
		body = parseInt(body); 

		// width of one section 
		var width = $('.section').width();
		width = parseInt(width);

		// point where to hide scroll 
		var finish = body - (width + 4); 

		// make "scroll" container disapear at the end of the page
		if(scrollLeft >= finish) {

			$('.scroll-flex').addClass('hide-scroll');

		}

		if(scrollLeft < finish) {

			$('.scroll-flex').removeClass('hide-scroll');
		}

		// border-bottom menu hide / show

		var magicLineLeft = $magicLine.position().left;
		var item3 = $('#item-3').position().left;
		var item4 = $('#item-4').position().left;

		if(magicLineLeft > item3 && magicLineLeft < item4) {

			$magicLine.css({'opacity':'0', 'list-style-type':'none', 'transition':'0.1s ease-in-out'});

			setTimeout(function() {

				if($magicLine.css('opacity') == 0) {

					$magicLine.css({'opacity':'1', 'list-style-type':'none', 'transition':'0.1s ease-in-out'});
				}

			},200);
		}
		else {

			$magicLine.css({'opacity':'1', 'list-style-type':'none', 'transition':'0.1s ease-in-out'});
		}


		/***** animation *****/


		if(scrollLeft > -1 && scrollLeft <= width * (25 / 100)) {

			toLeft('#item-1');


			//bulle

			var buble = new Buble();
			buble.bubleBig();

			// text

			var buble = new Buble('Bonjour !', 'Je suis Stéphane');
			buble.textBig();
			
			// button

			buble.buttonBig();

			$('#button-buble-1').show(0);
			$('#button-buble-2').hide(0);
			$('#button-buble-3').hide(0);

			// body id

			if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

				$('body').attr('id', '1'); 
			}

			// button slide mobile 

			// $('#go-left').attr('data-url', '#section-1').css({'transition':'0.2s', 'left':'-100px'});
			// $('#go-right').attr('data-url', '#section-2').css({'transition':'0.2s', 'right':'-100px'});

			$('#go-left').attr('data-url', '#section-1');
			$('#go-right').attr('data-url', '#section-2');
		

		}

		if(scrollLeft >= width * (25 / 100) && scrollLeft <= (width * 2 * 80 / 100)) {

			toLeft('#item-2');

			//bulle

			var buble = new Buble();
			buble.bubleSmall();
			
			// text

			var buble = new Buble('Vous voulez être présent sur le web ?', 'Je gère votre :');
			buble.textSmall();
			$('#bonjour').css({'padding-bottom': '10px', 'padding-top':'0px'})

			if($('#je-suis-stephane').hasClass('display')) {

				$('#je-suis-stephane').removeClass('display');
			}

			// button 

			$('.action').addClass('display');

			$('#button-buble-1').hide(0);
			$('#button-buble-2').hide(0);
			$('#button-buble-3').hide(0);

			// body id

			if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

				$('body').attr('id', '2'); 
			}

			// button slide mobile

			$('#go-left').attr('data-url', '#section-1');
			$('#go-right').attr('data-url', '#section-3');

			// if(!$('.hamburger').hasClass('responsive')) { 

			// 	$('#go-left').css({'transition':'0.2s', 'left':'0px'});
			// 	$('#go-right').css({'transition':'0.2s', 'right':'0px'});
			// }
			
		}

		if(scrollLeft >= (width * 2 * 80 / 100) && scrollLeft <= (width * 3)) {

			toLeft('#item-3');

			//bulle

			var buble = new Buble();
			buble.constraint1();

			// text

			var buble = new Buble('Mon travail se résume en 3 points :');
			buble.textSmall();
			$('#bonjour').css({'padding-bottom': '0px', 'padding-top':'0px'})

			$('#bonjour').css({'padding-bottom':'0px'});

			// button 

			if(!$('.action').hasClass('display')) {

				$('.action').addClass('display');
			}

			$('#button-buble-1').hide(0);
			$('#button-buble-2').hide(0);
			$('#button-buble-3').hide(0);

			// body id

			if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

				$('body').attr('id', '3'); 
			}

			// button slide mobile 

			$('#go-left').attr('data-url', '#section-2');
			$('#go-right').attr('data-url', '#section-4');

		}

		// animation on smartphone 

		if(windoWidth > 400) {

			value = width * 3 * 85 / 100;

		}

		if(windoWidth < 400) {

			value = width * 3;
		}


		if(scrollLeft >= (value) && scrollLeft <= (width * 4)) {

			toLeft('#item-4');

			//bulle

			var buble = new Buble();
			buble.bubleBig();
			
			// text

			var buble = new Buble('Vous envisagez une collaboration ?', 'Nous procédons en 5 étapes :');
			buble.textBig();

			$('#je-suis-stephane').removeClass('display');
			$('#createur-de-site-web').addClass('display');

			// button 

			buble.buttonMedium();

			$('#button-buble-1').hide(0);
			$('#button-buble-2').show(0);
			$('#button-buble-3').hide(0);

			// body id

			if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

				$('body').attr('id', '4'); 
			}

			// button slide mobile 

			$('#go-left').attr('data-url', '#section-3');
			$('#go-right').attr('data-url', '#section-5');


		}

		if(scrollLeft >= (width * 4 * 90 / 100) && scrollLeft <= (width * 5)) {

			toLeft('#item-5');

			//bulle

			var buble= new Buble();
			buble.constraint2();

			// text

			var buble = new Buble('Avant d\'aller plus loin', 'Voudriez-vous voir mon travail ?');
			buble.textBig();

			$('#je-suis-stephane').removeClass('display');
			$('#createur-de-site-web').addClass('display');

			// button

			// $('.allons-y-container').animate({'opacity':'0'}, 200);
			buble.buttonMedium();	

			// body id

			if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

				$('body').attr('id', '5'); 
			}

			$('#button-buble-1').hide(0);
			$('#button-buble-2').hide(0);
			$('#button-buble-3').show(0);

			// button slide mobile 

			$('#go-left').attr('data-url', '#section-4');
			$('#go-right').attr('data-url', '#section-6');
	
		}

		if(scrollLeft >= (width * 5 * 90 / 100) && scrollLeft <= (width * 6)) {

			toLeft('#item-6');

			//bulle

			var buble = new Buble();
			buble.bubleSmall();
			
			$('.bulle-container').removeClass('buble-container-top'); 

			// text

			var buble = new Buble('Vous souhaitez qu\'on travaille ensemble ?');
			buble.textSmall();
			$('#bonjour').css({'padding-bottom': '0px'});
			$('#je-suis-stephane').addClass('display');

			// button

			buble.buttonSmall();

			$('#button-buble-1').hide(0);
			$('#button-buble-2').hide(0);
			$('#button-buble-3').hide(0);

			// body id

			if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

				$('body').attr('id', '6');
			}

			// button slide mobile 
			$('#go-left').attr('data-url', '#section-5');
			$('#go-right').attr('data-url', '#section-6');

		}

	});

});