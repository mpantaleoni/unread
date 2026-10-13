// Offline support: always try the network first, fall back to the cached copy.
// Bump CACHE (and the ?v= on the story scripts in index.html) whenever files change.
const CACHE = 'unread-v4';
const ASSETS = ['./', 'index.html', 'manifest.webmanifest',
  'story/en.js?v=4', 'story/it.js?v=4', 'story/de.js?v=4', 'story/fr.js?v=4',
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
  // Network first, so a new version shows up on the very next launch; cache when offline.
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      })
      .catch(() => caches.match(e.request).then(hit => hit || caches.match('index.html')))
  );
});
