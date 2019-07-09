const withESLint = require("next-eslint");
module.exports = withESLint();

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: "css-loader"
      }
    ]
  },
  useFileSystemPublicRoutes: false,
  exportPathMap: () => ({
    "/": { page: "/index" },
    "/auth": { page: "/auth" },
    "/postlist": { page: "/postlist" },
    "/post": { page: "/post", query: { title: "testpage" } }
  })
};
