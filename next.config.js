const withNextIntl = require("next-intl/plugin")("./i18n.ts");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"]
  }
};

module.exports = withNextIntl(nextConfig);
