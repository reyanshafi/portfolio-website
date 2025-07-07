/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Detect if Turbopack is being used
const isTurbopack = process.env.TURBOPACK === '1' || 
                    process.argv.some(arg => arg.includes('turbo') || arg.includes('--turbopack'));

const nextConfig = {
  // Performance optimizations
  compress: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compiler optimizations - only apply when not using Turbopack
  ...(isTurbopack ? {} : {
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    // Webpack-specific optimizations - only apply when not using Turbopack
    webpack: (config, { dev, isServer }) => {
      // Webpack-specific optimizations here
      return config;
    },
  }),
  
  // Experimental features compatible with both
  experimental: {
    // Use features compatible with both Webpack and Turbopack
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  
  // Turbopack configuration (modern approach)
  ...(isTurbopack ? {
    turbopack: {
      // Turbopack-specific settings if needed
    },
  } : {}),
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Add strong caching for static assets
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // But don't cache API routes and dynamic content
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
