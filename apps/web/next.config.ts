/** @type {import('next').NextConfig} */

const nextConfig = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
};

module.exports = nextConfig;

export default nextConfig;
