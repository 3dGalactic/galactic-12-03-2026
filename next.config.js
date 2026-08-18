/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io', 'images.unsplash.com', 'cdn.pixabay.com', 'images.pexels.com', 'www.mechdaily.com'],
  },
  transpilePackages: ['scheduler'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
