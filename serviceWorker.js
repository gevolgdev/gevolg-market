const CACHE_NAME = 'version-1';
const urlsToCache = ['./index.html'];


this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return fetch(event.request);
      })
      .catch(() => caches.match('offline.html'))
  );
});

this.addEventListener('active', event => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(caches.keys()
  .then(cacheNames => Promisse.all(
    cacheNames.map(item => {
      if(!cacheWhiteList.includes(item)) {
        return caches.delete(item);
      }
    })
  )))
});