// Service Worker for caching and performance optimization
const CACHE_NAME = 'portfolio-cache-v2'; // Updated cache version
const STATIC_ASSETS = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/blog',
  '/assets/pic.png',
  '/assets/resume.pdf',
  '/favicon.ico'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Cache installation failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
  self.clients.claim();
});

// Fetch event - network-first strategy for HTML and JSON
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  // Skip Google Analytics and other third-party requests
  if (!url.origin.includes(self.location.origin)) {
    return;
  }
  
  // For HTML pages and JSON data - always try network first to get fresh content
  if (event.request.destination === 'document' || 
      url.pathname.endsWith('.json') || 
      url.pathname.startsWith('/api/')) {
    
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone the response for caching
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
            
          return response;
        })
        .catch(() => {
          // If network fails, try the cache
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              
              // Fallback for offline HTML pages
              if (event.request.destination === 'document') {
                return caches.match('/');
              }
              
              return null;
            });
        })
    );
  } else {
    // For other assets (CSS, JS, images) - cache first, then network
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Also fetch from network to update cache in background
            fetch(event.request)
              .then(response => {
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, response);
                  });
              })
              .catch(() => {/* Ignore failures */});
              
            return cachedResponse;
          }
          
          // Not in cache, get from network
          return fetch(event.request)
            .then(response => {
              // Clone the response for caching
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
                
              return response;
            });
        })
    );
  }
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      handleOfflineFormSubmissions()
    );
  }
});

async function handleOfflineFormSubmissions() {
  // Implementation for handling offline form submissions
  console.log('Processing offline form submissions');
}
