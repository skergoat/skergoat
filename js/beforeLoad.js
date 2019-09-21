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