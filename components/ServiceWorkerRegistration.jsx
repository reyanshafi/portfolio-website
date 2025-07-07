'use client';

import { useEffect } from 'react';
import { VERSION } from '@/lib/version';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      if (process.env.NODE_ENV === 'production') {
        // Register service worker with version
        navigator.serviceWorker
          .register(`/sw.js?v=${VERSION}`)
          .then((registration) => {
            console.log('SW registered: ', registration);
            
            // Check for updates every time the page loads
            registration.update();
            
            // Set up periodic checks for updates
            const updateInterval = setInterval(() => {
              registration.update();
              console.log('Checking for SW updates...');
            }, 60 * 60 * 1000); // Check every hour
            
            return () => clearInterval(updateInterval);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      } else {
        // In development, unregister any service workers to prevent caching issues
        navigator.serviceWorker.getRegistrations().then(registrations => {
          for(let registration of registrations) {
            registration.unregister();
            console.log('SW unregistered in dev mode');
          }
        });
      }
    }
  }, []);

  return null;
}
