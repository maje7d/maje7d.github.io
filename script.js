const CACHE_NAME = 'speed-bypass-v1';
const SPEEDTEST_URLS = [
  'https://www.speedtest.net/favicon.ico',
  'https://c.speedtest.net/favicon.ico',
  'https://b.speedtest.net/favicon.ico'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(SPEEDTEST_URLS);
      })
  );
});
const CACHE_NAME = 'speed-bypass-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/script.js',
  '/speed-icon-illustration-free-vector.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
