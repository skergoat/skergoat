// $(window).bind("load", function() {
//     function e() {
//         $("body").hasClass("offWheel") || (new Date - i < s ? setTimeout(e, s) : (t = !1, $("body").removeClass("resize")))
//     }

//     function a(e) {
//         var a = e.left;
//         $("html, body").animate({
//             scrollLeft: a + "px"
//         }, 0)
//     }
//     var i, t = !1,
//         s = 200;
//     $(window).resize(function() {
//         var n = $("body").attr("id"),
//             o = $("#info-name").text(),
//             h = $(o + " .page").attr("id"),
//             d = $("#" + h).height();
//         if ($("#main-2").css({
//                 "max-height": d,
//                 height: d
//             }), $("body").hasClass("offWheel")) {
//             if ($("#span-info").hasClass("who")) l = $("#sub-1").position();
//             else var l = $("#sub-" + n).position();
//             a(l)
//         } else {
//             $("body").addClass("resize"), a(l = $("#section-" + n).position()), i = new Date, !1 === t && (t = !0, setTimeout(e, s))
//         }
//         var r = $(window).width();
//         $(".hamburger").hasClass("responsive") ? (r > 780 && $("nav").animate({
//             height: "90px"
//         }, 0), r < 780 && $("nav").animate({
//             height: "345px"
//         }, 0)) : (r > 780 && $("nav").animate({
//             height: "90px"
//         }, 0), r <= 780 && $("nav").animate({
//             height: "55px"
//         }, 0))
//     })
// });

$(window).bind("load", function() {

    // enable scroll after resize

    function resizeend() {

        if(!$('body').hasClass('offWheel')) {

            if (new Date() - rtime < delta) {
                setTimeout(resizeend, delta);
            } else {
                timeout = false;
                $('body').removeClass('resize');
            } 
        }
    }

    function scrollLeft(x) {

        var left = x.left;
        var top = x.top;

        $('html, body').animate({ 
            scrollLeft:left + "px",
            scrollTop:top + "px"
        }, 0);

    }

    var rtime;
    var timeout = false;
    var delta = 200;

    $(window).resize(function() {

        var body_id = $('body').attr('id');
        var name = $('#info-name').text();
        var getPageId = $(name + ' .page').attr('id');
        var height = $('#' + getPageId).height();

        // resize height 

        $('#main-2').css({'max-height':height, 'height':height});

        // resize position left

        // main 2
        if($('body').hasClass('offWheel')) {

            if($('#span-info').hasClass('who')) {

                x = $('#sub-1').position();

            } 
            else {

                var x = $('#sub-' + body_id).position();
            }

            scrollLeft(x);

        }

        // main 
        else {

            // disable scroll to keep the same 'body' id and stay at current section 
            $('body').addClass('resize');

            // if($(this).width() > 450) {

            var x = $('#section-' + body_id).position();
            scrollLeft(x);

            // }

            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);
            }

        }

        // resize menu 

        var width = $(window).width();

        if($('.hamburger').hasClass('responsive')) {

            if(width > 780) {

                $('nav').animate({'height':'90px'}, 0);

            }
            if(width < 780) {

                $('nav').animate({'height':'345px'}, 0);
    
            }

        }
        else {

            if(width > 780) {

                $('nav').animate({'height':'90px'}, 0);

            }
            if(width <= 780) {

                $('nav').animate({'height':'55px'}, 0);
    
            }

        }
  
    });

});