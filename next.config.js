/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["files.cdn.printful.com", "printful.s3-accelerate.amazonaws.com"],
  },
};

module.exports = nextConfig;
