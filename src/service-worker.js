self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('gevolgmarket-app')
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/dist/index.html',
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});