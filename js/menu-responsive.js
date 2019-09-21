$(function() {

    // open / close 

    $('.hamburger').click(function(e) {

        e.preventDefault();

        var width = $(window).width();

        if($(this).hasClass('responsive')){ 

            $('nav').animate({'height':'55px'}, 300);

            // toggle button

            $('.hamburger').css('transition', '0.2s ease-in-out').css('margin-top', '-=10px');
            $('#slice-1').css('transition', '0.2s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');
            $('#slice-2').css('transition', '0.2s ease-in-out').css('transform', 'translateX(0px)').fadeIn(50);
            $('#slice-3').css('transition', '0.2s ease-in-out').css('transform', 'rotate(0deg) translateY(0px)');

            // slide buttons
        
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

        }
        else {

            // toggle button 

            $('.hamburger').css('transition', '0.2s ease-in-out').css('margin-top', '+=10px');
            $('#slice-1').css('transition', '0.2s ease-in-out').css('transform', 'rotate(43deg) translateY(6px)');
            $('#slice-2').css('transition', '0.2s ease-in-out').css('transform', 'translateX(100px)').fadeOut(50);
            $('#slice-3').css('transition', '0.2s ease-in-out').css('transform', 'rotate(-43deg) translateY(-6px)');

            $('nav').animate({'height': '345px'}, 300);

            // slide buttons

            if(width > 450) {

                $('#go-left').css({'transition':'0.2s', 'left':'-100px', 'right': 'auto'});
                $('#go-right').css({'transition':'0.2s', 'right':'-100px'});

            }
            else { 

                $('#go-left').css({'transition':'0.2s', 'right':'-100px', 'left': 'auto'});
                $('#go-right').css({'transition':'0.2s', 'right':'-100px'});

                $('nav').css('box-shadow', '0 3px 6px rgba(0, 0, 0, .5)');

            }

        }

        $(this).toggleClass('responsive');

    });

});