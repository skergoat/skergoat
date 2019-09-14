window.onbeforeunload = function(event) {

    $('#main').css('display', 'block').animate({'position': 'relative', 'top':'0px'}, 0);
	$('#main-2').css({'display': 'none'});
	$('body, html').css('overflow', 'hidden');

};