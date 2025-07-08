// A simple versioning utility to force updates
// Increment this version number whenever you make significant changes
export const VERSION = '1.0.3';

// Get a versioned URL to force cache busting
export function getVersionedUrl(url) {
  // Don't add version to external URLs
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  
  // Add version as query parameter to force cache invalidation
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${VERSION}`;
}
