// Verificamos se o navegador tem suporte a serviceworker
if('serviceWorker' in navigator){

	window.addEventListener('load', function(){

		// Fazemos o registro do serviceworker
		navigator.serviceWorker.register('sw.js').then(function(registration){
			console.log(registration);
		}).catch(function(err){
			console.error('Erro ao instalar o serviceworker: ' + err);
		});
	})

}
