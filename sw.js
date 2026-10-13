// Offline support: serve the app shell from cache, refresh it in the background.
// Bump CACHE (and the ?v= on the story scripts in index.html) whenever files change.
const CACHE = 'unread-v3';
const ASSETS = ['./', 'index.html', 'manifest.webmanifest',
  'story/en.js?v=3', 'story/it.js?v=3', 'story/de.js?v=3', 'story/fr.js?v=3',
  'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  // cache: 'reload' skips the browser's HTTP cache so a new version never stores stale files
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fresh = fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
