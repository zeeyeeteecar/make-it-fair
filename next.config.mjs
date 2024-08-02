const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["https://source.unsplash.com"],
  },

  experimental: {
    urlImports: ["http://ip-api.com/json/", "https://cdn.skypack.dev"],
  },
};

export default nextConfig;
