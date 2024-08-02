/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["ttps://source.unsplash.com/random/900%C3%97700/?banff"],
  },

  experimental: {
    urlImports: ["http://ip-api.com/json/", "https://cdn.skypack.dev"],
  },
};

export default nextConfig;
