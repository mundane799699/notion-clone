/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "files.edgestore.dev" }],
  },
};

export default nextConfig;
