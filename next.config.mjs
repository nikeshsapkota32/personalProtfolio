/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personalProtfolio',
  assetPrefix: '/personalProtfolio/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
