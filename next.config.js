// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["avatars.githubusercontent.com"],
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv|avi|mkv|mov|wmv)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
