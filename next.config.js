/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/quote-generator',
  assetPrefix: '/quote-generator/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
