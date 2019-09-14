
//enable or disable scroll 

$(window).bind("load", function() {

	$('body, html').on('mousewheel', function(e, delta) {

		var width = $(window).width(); 

		// enable scroll y when #main-2
		if($('body').hasClass('offWheel')) {

			$('body').css('overflow', 'scroll');

		} 
		// enable mousewheel when #main-1
		else {

			// scroll only if no resize 
			if(!$('body').hasClass('resize')) {

				// scroll only on laptop or tablette 
				if(width < 500) {

					$('body').css('overflow', 'hidden');

				}
				else {

					this.scrollLeft -= (delta * 1.5);
				}

			}

		}
	});

});