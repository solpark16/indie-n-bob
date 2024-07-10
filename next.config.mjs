/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "newsimg.sedaily.com",
      },
    ],
  },
};

export default nextConfig;
