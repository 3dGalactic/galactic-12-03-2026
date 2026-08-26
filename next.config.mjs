/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/casestudies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
