/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
};

module.exports = nextConfig;
