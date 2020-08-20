// source --> https://www.skergoat.com/wp-content/themes/Divi-child/js/contactForm.js 
// document.addEventListener("wpcf7submit", function(t) {
//     var e = $(document).height();
//     $("#main-2").animate({
//         height: e + "px",
//         "max-height": e + "px"
//     }, 0)
// }), document.addEventListener("wpcf7mailsent", function(t) {
//     $(".wpcf7-mail-sent-ok").text("").css({
//         height: "0px",
//         width: "0px",
//         margin: "0px",
//         padding: "0px"
//     }), $(".wpcf7-mail-sent-ok").hide(0), $("#thanks").css("display", "flex");
//     var e = $("#thanks").height(),
//         i = $("#main-2").height();
//     new_height = i + e, $("#main-2").animate({
//         height: new_height + "px",
//         "max-height": new_height + "px"
//     }, 0);
//     $("#thanks").height();
//     var n = $("#thanks").offset().top;
//     $("html, body").animate({
//         scrollTop: n + 50 + "px"
//     }, 300), setTimeout(function() {
//         $("#thanks").position();
//         $("html, body").animate({
//             scrollTop: n.top + "px"
//         }, 0), $("#main-2").animate({
//             height: e + "px",
//             "max-height": e + "px"
//         }, 0), $("form").css("display", "none"), $(".arrowAndUp").css("display", "none")
//     }, 300)
// }, !1);

// keep page height after submit form

document.addEventListener( 'wpcf7submit', function( event ) { 

    var height = $(document).height();
    $('#main-2').animate({'height':height + 'px', 'max-height':height + 'px'}, 0);
});

// after mail sent 

document.addEventListener( 'wpcf7mailsent', function( event ) {

    // disable success message
    $('.wpcf7-mail-sent-ok').text('').css({'height':'0px', 'width':'0px', 'margin':'0px', 'padding':'0px'});
    $('.wpcf7-mail-sent-ok').hide(0);

    // display and go to thanks page

    $('#thanks').css('display', 'flex');

    var thanksHeight = $('#thanks').height();
    var page_height = $('#main-2').height();
    new_height = page_height + thanksHeight;

    $('#main-2').animate({'height':new_height + 'px', 'max-height':new_height + 'px'}, 0);

    var thanks_height = $('#thanks').height();

    var x = $('#thanks').offset().top;

    $('html, body').animate({ 
        scrollTop: (x + 50) + "px"  
    }, 300);

    // stay on thanks page  
    
    setTimeout(function() {

        var x2 = $('#thanks').position();

        $('html, body').animate({ 
            scrollTop:x.top + "px"  
        }, 0);

        $('#main-2').animate({'height':thanksHeight + 'px', 'max-height':thanksHeight + 'px'}, 0);

        $('form').css('display', 'none');
        $('.arrowAndUp').css('display', 'none');

    }, 300);

}, false );