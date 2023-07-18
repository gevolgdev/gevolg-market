const CACHE_NAME = 'version-1';
const urlsToCache = ['../index.html'];

let deferredPrompt;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => caches.match('offline.html'))
  );
});

self.addEventListener('activate', event => {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(item => {
          if (!cacheWhiteList.includes(item)) {
            return caches.delete(item);
          }
        })
      ))
  );
});

self.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
});
