module.exports = {
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }]
  },
  useFileSystemPublicRoutes: false,
  exportPathMap: () => ({
    "/": { page: "/index" },
    "/auth": { page: "/auth" },
    "/postlist": { page: "/postlist" },
    "/post": { page: "/post" }
  })
};
