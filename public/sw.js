const CACHE_NAME = 'portfolio-cache-v1';
const OFFLINE_URL = '/offline.html';

// Assets to cache immediately when the service worker installs
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css',
  // Add fonts to cache
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap',
  'https://fonts.gstatic.com',
  'https://fonts.googleapis.com'
];

// Cache strategies
const cacheStrategies = {
  // Cache first, then network
  cacheFirst: async (request) => {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    try {
      const networkResponse = await fetch(request);
      await cache.put(request, networkResponse.clone());
      return networkResponse;
    } catch (error) {
      return null;
    }
  },

  // Network first, then cache
  networkFirst: async (request) => {
    try {
      const networkResponse = await fetch(request);
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
      return networkResponse;
    } catch (error) {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      // If it's a navigation request, return the offline page
      if (request.mode === 'navigate') {
        return caches.match(OFFLINE_URL);
      }
      return null;
    }
  }
};

// Install event - precache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(PRECACHE_ASSETS);
      self.skipWaiting();
    })()
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Skip cross-origin requests
  if (!request.url.startsWith(self.location.origin) && 
      !request.url.startsWith('https://fonts.')) {
    return;
  }

  event.respondWith(
    (async () => {
      // For navigation requests, use network-first strategy
      if (request.mode === 'navigate') {
        const response = await cacheStrategies.networkFirst(request);
        return response || caches.match(OFFLINE_URL);
      }

      // For static assets and fonts, use cache-first strategy
      if (
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'font' ||
        request.destination === 'image'
      ) {
        const response = await cacheStrategies.cacheFirst(request);
        return response || fetch(request);
      }

      // For everything else, try network first
      const response = await cacheStrategies.networkFirst(request);
      return response || new Response('Content not available offline');
    })()
  );
}); 