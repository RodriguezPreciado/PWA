//Service Worker
if('serviceWorker' in navigator){
	navigator.serviceWorker.register("sw.js")
						   .then(res => console.log("serviceWorker Cargado Correctamente",res))
						   .catch(err => console.log("ServiceWorker no se puedo registrar",err));
}else{

	console.log("No puedes usar los service worker");
}

//Scrool suavizado
$(document).ready(function(){


	$("#menu a").click(function(e){
		e.preventDefault();

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		})

		return false;
	});

});