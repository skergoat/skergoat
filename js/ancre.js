$(function() {
    $('a[href^="#"]').click(function() {

    	var t = $(this).attr("href");

    	$('.hamburger').removeClass('responsive');

    	$('nav').animate({'height':'55px'}, 300);

        // toggle button

        $('.hamburger').css('transition', '0.2s ease-in-out').css('margin-top', '-=10px');
        $('#slice-1').css('transition', '0.2s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');
        $('#slice-2').css('transition', '0.2s ease-in-out').css('transform', 'translateX(0px)').fadeIn(50);
        $('#slice-3').css('transition', '0.2s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');

        // slide buttons

        var width = $(window).width();
    
        if(width > 450) {

            $('#go-left').css({'transition':'0.2s', 'left':'0px', 'right': 'auto'});
            $('#go-right').css({'transition':'0.2s', 'right':'0px'});

        }
        else { 

            $('#go-left').css({'transition':'0.2s', 'right':'5px', 'left': 'auto'});
            $('#go-right').css({'transition':'0.2s', 'right':'5px'});

            setTimeout(function() {

                 $('nav').css('box-shadow', 'none');

            }, 200);
            
        }

        setTimeout(function() {

	        if ("#" !== t) return $("html, body").animate({
	            scrollLeft: $(t).position().left
	        }, 300), !1

        }, 300);

    });

});