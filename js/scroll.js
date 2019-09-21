$(function() {
    class t {
        constructor(t, a) {
            this.message1 = t, this.message2 = a
        }
        bubleBig() {
            $(".bulle-container").removeClass("buble-container-top"), $(".bulle").removeClass("buble-top"), $(".avatar-small").removeClass("avatar-small"), $(".container-avatar").removeClass("container-avatar-small"), $(".bulle-content").removeClass("bulle-content-small"), $(".triangle").removeClass("triangle-small")
        }
        bubleSmall() {
            $(".bulle-container").addClass("buble-container-top"), $(".bulle").addClass("buble-top"), $(".avatar").addClass("avatar-small"), $(".container-avatar").addClass("container-avatar-small"), $(".bulle-content").addClass("bulle-content-small"), $(".triangle").addClass("triangle-small")
        }
        textBig() {
            $(".bulle-content-p").removeClass("bulle-content-p-small"), $("#bonjour").css({
                "padding-bottom": "25px",
                "padding-top": "0px"
            }).text("").text(this.message1), $("#je-suis-stephane").css("padding-bottom", "50px").text("").text(this.message2), $("#createur-de-site-web").removeClass("display")
        }
        textSmall() {
            $(".bulle-content-p").addClass("bulle-content-p-small"), $("#createur-de-site-web").addClass("display"), $("#bonjour").text("").text(this.message1), $("#je-suis-stephane").css("padding-bottom", "0px").text("").text(this.message2)
        }
        buttonBig() {
            $(".action").removeClass("display").removeClass("button-small")
        }
        buttonMedium() {
            $(".action").removeClass("display").addClass("button-small")
        }
        buttonSmall() {
            $(".action").addClass("display").removeClass("button-small")
        }
        constraint1() {
            $(".bulle-container").hasClass("buble-container-top") || $(".bulle-container").addClass("buble-container-top"), $(".bulle").hasClass("buble-top") || $(".bulle").addClass("buble-top"), $(".avatar").hasClass("avatar-small") || $(".avatar").addClass("avatar-small"), $(".bulle-content").hasClass("bulle-content-small") || $(".bulle-content").addClass("bulle-content-small"), $(".container-avatar").hasClass("container-avatar-small") || $(".container-avatar").addClass("container-avatar-small"), $(".triangle").hasClass("triangle-small") || $(".triangle").addClass("triangle-small")
        }
        constraint2() {
            $(".bulle-container").hasClass("buble-container-top") && $(".bulle-container").removeClass("buble-container-top"), $(".bulle").hasClass("buble-top") && $(".bulle").removeClass("buble-top"), $(".avatar-small").hasClass("avatar-small") && $(".avatar-small").removeClass("avatar-small"), $(".bulle-content").hasClass("bulle-content-small") && $(".bulle-content").removeClass("bulle-content-small"), $(".container-avatar").hasClass("container-avatar-small") && $(".container-avatar").removeClass("container-avatar-small"), $(".triangle").hasClass("triangle-small") && $(".triangle").removeClass("triangle-small")
        }
    }

    var windowWidth = $(window).width();

    var a = $(this).scrollLeft();
          
    var s = $(".section").width();

    $("#example-one").append("<li id='magic-line'></li>");
    var o, n = $("#magic-line");

    n.width($(".current_page_item").width()).css("left", $(".current_page_item a").position().left);

    function i(t) {
        n.css({
            transition: "0.2s ease-in-out",
            left: $(t).position().left,
            width: $(t).parent().width()
        });
    }

    if(windowWidth <= 450) {

        var scrollTop = $(this).scrollTop();

        var height = $('.section').height();
        height = parseInt(height);

        console.log('scroll : ' + scrollTop);
        console.log('height : ' + height);

        if(scrollTop > -1 && scrollTop <= height * (70 / 100)) { 

            //bulle

            var buble = new t();
            buble.bubleBig();

            // text

            var buble = new t('Bonjour !', 'Je suis Stéphane');
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

            $("#go-left").attr("data-url", "#section-1");
            $("#go-right").attr("data-url", "#section-2");

            if(!$('body').hasClass('offWheel')) {

                $('#main').css({'transition':'0.3s', 'background':'#3F0E63'});
            }

        }

        if(scrollTop >= height * (70 / 100) && scrollTop <= (height * 2 * 80 / 100)) {

            //bulle

            var buble = new t();
            buble.bubleSmall();
            
            // text

            var buble = new t('Vous voulez être présent sur le web ?', 'Je gère votre :');
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

            $("#go-left").attr("data-url", "#section-1");
            $("#go-right").attr("data-url", "#section-3");

            if(!$('body').hasClass('offWheel')) {

               $('#main').css({'transition':'0.3s', 'background':'#EB5F74'});
            }
        }

        if(scrollTop >= (height * 2 * 80 / 100) && scrollTop <= (height * 3  * 90 / 100)) {

            //bulle

            var buble = new t();
            buble.constraint1();

            // text

            var buble = new t('Mon travail se résume en 3 points :');
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

            $("#go-left").attr("data-url", "#section-2");
            $("#go-right").attr("data-url", "#section-4");

            if(!$('body').hasClass('offWheel')) {

                $('#main').css({'transition':'0.3s', 'background':'#4DD5C0'});

            }

        }

        if(scrollTop >= (height * 3 * 90 / 100) && scrollTop <= (height * 4)) {

            //bulle

            var buble = new t();
            buble.bubleBig();
            
            // text

            var buble = new t('Vous envisagez une collaboration ?', 'Nous procédons en 5 étapes :');
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

            $("#go-left").attr("data-url", "#section-3");
            $("#go-right").attr("data-url", "#section-5");

            if(!$('body').hasClass('offWheel')) {

               $('#main').css({'transition':'0.3s', 'background':'#FADC6F'});

            }

        }

        if(scrollTop >= (height * 4 * 90 / 100) && scrollTop <= (height * 5)) {

            //bulle

            var buble= new t();
            buble.constraint2();

            // text

            var buble = new t('Avant d\'aller plus loin', 'Voudriez-vous voir mon travail ?');
            buble.textBig();

            $('#je-suis-stephane').removeClass('display');
            $('#createur-de-site-web').addClass('display');

            // button

            buble.buttonMedium();   

            // body id

            if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

                $('body').attr('id', '5'); 
            }

            $('#button-buble-1').hide(0);
            $('#button-buble-2').hide(0);
            $('#button-buble-3').show(0);

            $("#go-left").attr("data-url", "#section-4");
            $("#go-right").attr("data-url", "#section-6");

            $('.container-avatar').css('margin-bottom', '20px');

            if(!$('body').hasClass('offWheel')) {

                $('#main').css({'transition':'0.3s', 'background':'#459CE7'});

            }

    
        }

        if(scrollTop >= (height * 5 * 95 / 100) && scrollTop <= (height * 6)) {

            //bulle

            var buble = new t();
            buble.bubleSmall();
            
            $('.bulle-container').removeClass('buble-container-top'); 

            // text

            var buble = new t('Vous souhaitez qu\'on travaille ensemble ?');
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

            $("#go-left").attr("data-url", "#section-5");
            $("#go-right").attr("data-url", "#section-6");

            $('.container-avatar').css('margin-bottom', '10px');

            if(!$('body').hasClass('offWheel')) {

                $('#main').css({'transition':'0.3s', 'background':'#4DD5C0'});

            }


        }

    }
    else {

         (a > -1 && a <= .25 * s) && ((o = new t).bubleBig(), (o = new t("Bonjour !", "Je suis Stéphane")).textBig(), o.buttonBig(), $("#button-buble-1").show(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "1"), $("#go-left").attr("data-url", "#section-1"), $("#go-right").attr("data-url", "#section-2"));
        a >= .25 * s && a <= 2 * s * 80 / 100 && ((o = new t).bubleSmall(), (o = new t("Vous voulez être présent sur le web ?", "Je gère votre :")).textSmall(), $("#bonjour").css({
            "padding-bottom": "10px",
            "padding-top": "0px"
        }), $("#je-suis-stephane").hasClass("display") && $("#je-suis-stephane").removeClass("display"), $(".action").addClass("display"), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "2"), $("#go-left").attr("data-url", "#section-1"), $("#go-right").attr("data-url", "#section-3"));
        a >= 2 * s * 80 / 100 && a <= 3 * s && ((o = new t).constraint1(), (o = new t("Mon travail se resume en 3 points :")).textSmall(), $("#bonjour").css({
            "padding-bottom": "0px",
            "padding-top": "0px"
        }), $(".action").hasClass("display") || $("body").hasClass("offWheel") || $(".action").addClass("display"), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "3"), $("#go-left").attr("data-url", "#section-2"), $("#go-right").attr("data-url", "#section-4"));
        a >= 3 * s * 85 / 100 && a <= 4 * s && ((o = new t).bubleBig(), (o = new t("Vous envisagez une collaboration ?", "Nous procédons en 5 étapes :")).textBig(), $("#je-suis-stephane").removeClass("display"), $("#createur-de-site-web").addClass("display"), o.buttonMedium(), $("#button-buble-1").hide(0), $("#button-buble-2").show(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "4"), $("#go-left").attr("data-url", "#section-3"), $("#go-right").attr("data-url", "#section-5"));
        a >= 4 * s * 90 / 100 && a <= 5 * s && ((o = new t).constraint2(), (o = new t("Avant d'aller plus loin", "Voudriez-vous voir mon travail ?")).textBig(), $("#je-suis-stephane").removeClass("display"), $("#createur-de-site-web").addClass("display"), o.buttonMedium(), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").show(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "5"), $("#go-left").attr("data-url", "#section-4"), $("#go-right").attr("data-url", "#section-6"));
        a >= 5 * s * 90 / 100 && a <= 6 * s && ((o = new t).bubleSmall(), $(".bulle-container").removeClass("buble-container-top"), (o = new t("Vous souhaitez qu'on travaille ensemble ?")).textSmall(), $("#bonjour").css({
            "padding-bottom": "0px"
        }), $("#je-suis-stephane").addClass("display"), o.buttonSmall(), $("#button-buble-1").hide(0), $("#button-buble-2").hide(0), $("#button-buble-3").hide(0), $("body").hasClass("resize") || $("body").hasClass("offWheel") || $("body").attr("id", "6"), $("#go-left").attr("data-url", "#section-5"), $("#go-right").attr("data-url", "#section-6"));
    }

    $(window).scroll(function(a) {

        var windowWidth = $(window).width();


            // position scroll 
            var scrollLeft = $(this).scrollLeft();

            // width of one section 
            var width = $('.section').width();
            width = parseInt(width);


            var scrollTop = $(this).scrollTop();

            var height = $('.section').height();
            height = parseInt(height);

            var n = $("#magic-line");

            var magicLineLeft = n.position().left;
            var item3 = $('#item-3').position().left;
            var item4 = $('#item-4').position().left;

            if(magicLineLeft > item3 && magicLineLeft < item4) {

                n.css({'opacity':'0', 'list-style-type':'none', 'transition':'0.1s ease-in-out'});

                setTimeout(function() {

                    if(n.css('opacity') == 0) {

                       n.css({'opacity':'1', 'list-style-type':'none', 'transition':'0.1s ease-in-out'});
                    }

                },200);
            }
            else {

                n.css({'opacity':'1', 'list-style-type':'none', 'transition':'0.1s ease-in-out'});
            }

        if(windowWidth <= 450) {

            if(scrollTop > -1 && scrollTop <= height * (70 / 100)) { 

                //bulle

                var buble = new t();
                buble.bubleBig();

                // text

                var buble = new t('Bonjour !', 'Je suis Stéphane');
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

              $("#go-left").attr("data-url", "#section-1");
              $("#go-right").attr("data-url", "#section-2");

              if(!$('body').hasClass('offWheel')) {

                    $('#main').css({'transition':'0.3s', 'background':'#3F0E63'});
               }

            }

            if(scrollTop >= height * (70 / 100) && scrollTop <= (height * 2 * 80 / 100)) {

                //bulle

                var buble = new t();
                buble.bubleSmall();
                
                // text

                var buble = new t('Vous voulez être présent sur le web ?', 'Je gère votre :');
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

                $("#go-left").attr("data-url", "#section-1");
                $("#go-right").attr("data-url", "#section-3");

                if(!$('body').hasClass('offWheel')) {

                    $('#main').css({'transition':'0.3s', 'background':'#EB5F74'});
                }
   
            }

            if(scrollTop >= (height * 2 * 80 / 100) && scrollTop <= (height * 3  * 90 / 100)) {

                //bulle

                var buble = new t();
                buble.constraint1();

                // text

                var buble = new t('Mon travail se résume en 3 points :');
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

                $("#go-left").attr("data-url", "#section-2");
                $("#go-right").attr("data-url", "#section-4");

                if(!$('body').hasClass('offWheel')) {

                    $('#main').css({'transition':'0.3s', 'background':'#4DD5C0'});

                }

            }

            if(scrollTop >= (height * 3 * 90 / 100) && scrollTop <= (height * 4)) {

                //bulle

                var buble = new t();
                buble.bubleBig();
                
                // text

                var buble = new t('Vous envisagez une collaboration ?', 'Nous procédons en 5 étapes :');
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

                $("#go-left").attr("data-url", "#section-3");
                $("#go-right").attr("data-url", "#section-5");

                if(!$('body').hasClass('offWheel')) {

                    $('#main').css({'transition':'0.3s', 'background':'#FADC6F'});

                }


            }

            if(scrollTop >= (height * 4 * 90 / 100) && scrollTop <= (height * 5)) {

                //bulle

                var buble= new t();
                buble.constraint2();

                // text

                var buble = new t('Avant d\'aller plus loin', 'Voudriez-vous voir mon travail ?');
                buble.textBig();

                $('#je-suis-stephane').removeClass('display');
                $('#createur-de-site-web').addClass('display');

                // button

                buble.buttonMedium();   

                // body id

                if(!$('body').hasClass('resize') && !$('body').hasClass('offWheel')) {

                    $('body').attr('id', '5'); 
                }

                $('#button-buble-1').hide(0);
                $('#button-buble-2').hide(0);
                $('#button-buble-3').show(0);

                 $("#go-left").attr("data-url", "#section-4");
                $("#go-right").attr("data-url", "#section-6");

                $('.container-avatar').css('margin-bottom', '20px');

                if(!$('body').hasClass('offWheel')) {

                    $('#main').css({'transition':'0.3s', 'background':'#459CE7'});
                }
        
            }

            if(scrollTop >= (height * 5 * 95 / 100) && scrollTop <= (height * 6)) {

                //bulle

                var buble = new t();
                buble.bubleSmall();
                
                $('.bulle-container').removeClass('buble-container-top'); 

                // text

                var buble = new t('Vous souhaitez qu\'on travaille ensemble ?');
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

                $('.container-avatar').css('margin-bottom', '10px');

                $("#go-left").attr("data-url", "#section-5");
                $("#go-right").attr("data-url", "#section-6");

                if(!$('body').hasClass('offWheel')) {

                    $('#main').css({'transition':'0.3s', 'background':'#4DD5C0'});
                }

            }

        }
        else {

             /***** animation *****/

            if(scrollLeft > -1 && scrollLeft <= width * (25 / 100)) {

                i('#item-1');

                //bulle

                var buble = new t();
                buble.bubleBig();

                // text

                var buble = new t('Bonjour !', 'Je suis Stéphane');
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

                $('#go-left').attr('data-url', '#section-1');
                $('#go-right').attr('data-url', '#section-2');

            }

            if(scrollLeft >= width * (25 / 100) && scrollLeft <= (width * 2 * 80 / 100)) {

                i('#item-2');

                //bulle

                var buble = new t();
                buble.bubleSmall();
                
                // text

                var buble = new t('Vous voulez être présent sur le web ?', 'Je gère votre :');
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

                
            }

            if(scrollLeft >= (width * 2 * 80 / 100) && scrollLeft <= (width * 3)) {

                i('#item-3');

                //bulle

                var buble = new t();
                buble.constraint1();

                // text

                var buble = new t('Mon travail se résume en 3 points :');
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

            if(scrollLeft >= (width * 3 * 85 / 100) && scrollLeft <= (width * 4)) {

                i('#item-4');

                //bulle

                var buble = new t();
                buble.bubleBig();
                
                // text

                var buble = new t('Vous envisagez une collaboration ?', 'Nous procédons en 5 étapes :');
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

                i('#item-5');

                //bulle

                var buble= new t();
                buble.constraint2();

                // text

                var buble = new t('Avant d\'aller plus loin', 'Voudriez-vous voir mon travail ?');
                buble.textBig();

                $('#je-suis-stephane').removeClass('display');
                $('#createur-de-site-web').addClass('display');

                // button

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

                i('#item-6');

                //bulle

                var buble = new t();
                buble.bubleSmall();
                
                $('.bulle-container').removeClass('buble-container-top'); 

                // text

                var buble = new t('Vous souhaitez qu\'on travaille ensemble ?');
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

        }

    })

});