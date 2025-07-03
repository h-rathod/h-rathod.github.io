/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix to serve from root
  images: {
    unoptimized: true,
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // Ensure static export works with Next.js 13+ App Router
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
