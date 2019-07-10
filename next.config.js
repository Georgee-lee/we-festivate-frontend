const withESLint = require("next-eslint");
const withCSS = require("@zeit/next-css");

module.exports = {
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }]
  },
  useFileSystemPublicRoutes: false,
  exportPathMap: () => ({
    "/": { page: "/index" },
    "/auth": { page: "/auth" },
    "/postlist": { page: "/postlist" },
    "/post": { page: "/post", query: { title: "testpage" } }
  })
};
