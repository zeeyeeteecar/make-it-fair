const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["https://source.unsplash.com/random/900%C3%97700/?banff"],
  },

  experimental: {
    urlImports: ["http://ip-api.com/json/", "https://cdn.skypack.dev"],
  },
};

export default nextConfig;
