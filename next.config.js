const path = require("path");

const nextConfig = {
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com", "*"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },
};

module.exports = nextConfig;
