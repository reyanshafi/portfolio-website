'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components that are not immediately visible
export const LazyProjectsSection = dynamic(() => import('./ProjectsSection'), {
  loading: () => <div className="min-h-screen bg-[#171717] animate-pulse" />
});

export const LazyTestimonialsSection = dynamic(() => import('./TestimonialsSection'), {
  loading: () => <div className="min-h-screen bg-[#171717] animate-pulse" />
});

export const LazyContactSection = dynamic(() => import('./ContactSection'), {
  loading: () => <div className="min-h-screen bg-[#171717] animate-pulse" />
});

export const LazyFooter = dynamic(() => import('./Footer'), {
  loading: () => <div className="h-32 bg-[#171717] animate-pulse" />
});

// Performance monitoring component
const PerformanceMonitor = memo(function PerformanceMonitor() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', entry.value);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
  
  return null;
});

export default PerformanceMonitor;
