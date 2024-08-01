/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["example.com"],
  },

  experimental: {
    urlImports: ["http://ip-api.com/json/", "https://cdn.skypack.dev"],
  },
};

export default nextConfig;
