/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Weeding' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Weeding/' : '',
  experimental: {
    disableOptimizedLoading: true,
  }
}

module.exports = nextConfig 