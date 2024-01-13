/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.danmurphys.com.au",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
