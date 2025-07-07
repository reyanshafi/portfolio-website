// Performance configuration for the application
export const performanceConfig = {
  // Image optimization settings
  imageOptimization: {
    quality: 85,
    formats: ['image/avif', 'image/webp'],
    sizes: {
      mobile: '(max-width: 768px) 100vw',
      tablet: '(max-width: 1024px) 50vw',
      desktop: '33vw'
    }
  },

  // Animation settings
  animation: {
    duration: 0.6,
    ease: 'easeOut',
    stagger: 0.1
  },

  // Lazy loading thresholds
  lazyLoading: {
    rootMargin: '50px',
    threshold: 0.1
  },

  // Cache settings
  cache: {
    staticFiles: 31536000, // 1 year
    images: 86400, // 1 day
    api: 300 // 5 minutes
  }
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: performanceConfig.lazyLoading.rootMargin,
    threshold: performanceConfig.lazyLoading.threshold,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce function for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = '/assets/pic.png';
    
    // Preload critical CSS
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/assets/critical.css';
    link.as = 'style';
    document.head.appendChild(link);
  }
};

// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigationStart = window.performance.timing.navigationStart;
      const loadComplete = window.performance.timing.loadEventEnd;
      return loadComplete - navigationStart;
    }
    return 0;
  },

  // Measure first contentful paint
  measureFCP: () => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
            observer.disconnect();
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } else {
        resolve(0);
      }
    });
  },

  // Log performance metrics
  logMetrics: async () => {
    if (process.env.NODE_ENV === 'development') {
      const pageLoad = performanceMonitor.measurePageLoad();
      const fcp = await performanceMonitor.measureFCP();
      
      console.group('Performance Metrics');
      console.log(`Page Load Time: ${pageLoad}ms`);
      console.log(`First Contentful Paint: ${fcp}ms`);
      console.groupEnd();
    }
  }
};
