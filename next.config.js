/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['next-goatcounter'],
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
