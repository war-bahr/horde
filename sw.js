/* Horde offline shell. Bump CACHE when shipping a new build. */
const CACHE = 'horde-v8-2';
const ASSETS = [
  "./",
  "./assets/cinzel-latin-700-normal-C-gK7hA8.woff",
  "./assets/cinzel-latin-700-normal-Dkw14w9r.woff2",
  "./assets/index-CXSzTZzq.js",
  "./assets/index-sk6Fix2x.css",
  "./favicon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./index.html",
  "./manifest.webmanifest"
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of ASSETS) {
      try { await cache.add(url); } catch (e) { /* one miss must not fail the whole install */ }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy)).catch(() => {});
      }
      return response;
    } catch (e) {
      const dest = event.request.destination;
      const nav = event.request.mode === 'navigate' || dest === 'document';
      // Never fall back to index.html for scripts/styles — that leaves the boot
      // screen up forever when a PWA update races or the network blips.
      if (nav) return (await caches.match('./index.html')) || Promise.reject(e);
      return Promise.reject(e);
    }
  })());
});
