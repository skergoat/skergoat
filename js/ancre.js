$(function(){

	$('a[href^="#"]').click(function(){ //au clique sur un lien vers une ancre...

		var the_id = $(this).attr("href"); // on recupere le href du lien, cad l'id de l'ancre

		if (the_id === '#') { // s'il n'y a pas de href, il ne se passe rien
			return;
		}

		$('html, body').animate({ // on rejoint en vitesse "slow" la position de l'ancre 
			scrollLeft:(($(the_id).position().left)) 	//a laquelle on retranche la hauteur de la navbar 
		}, 300);
		
		return false; 
	});
	
});