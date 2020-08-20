// window.onbeforeunload=function(n){var o=document.getElementById("main").style,e=document.getElementById("main-2").style;o.display="block",o.position="relative",o.top="0px",o.transition="0s",e.display="none",console.log(o.transition="0s")};

window.onbeforeunload = function(event) {

	var el1 = document.getElementById('main').style;
	var el2 = document.getElementById('main-2').style;

	el1.display = 'block';
	el1.position = 'relative';
	el1.top = '0px';
	el1.transition = '0s';
	el2.display = 'none';

	console.log(el1.transition = '0s');

};