/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/quote-generator',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
