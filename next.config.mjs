/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    devIndicators: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [],
    },
  }

export default nextConfig;
