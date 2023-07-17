self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cache-name')
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/main.js',
          '/app.js',
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