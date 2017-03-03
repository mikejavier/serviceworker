var CACHE_NAME = 'my-first-cache';
var urlToCache = [
	'./',
	'./index.html',
	'./scripts/app.js',
	'./styles/app.css'
];

// fazendo a instalação do SW
self.addEventListener('install', function(e){
	e.waitUntil(
		caches.open(CACHE_NAME).then(function(cache){
			return cache.addAll(urlToCache);
		})
	);
});


// Pegando eventos de rede do navegador
self.addEventListener('fetch', function(e){

	e.respondWith(
		caches.match(e.request).then(function(response){

			if(response){
				return response;
			}
			return fetch(e.request);
		})
	);
});

// Renovando os caches no evento "activate"
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
        	console.log(cacheName)
        	if(cacheName !== CACHE_NAME){
            	return caches.delete(cacheName);
        	}
        })
      );
    })
  );
});
