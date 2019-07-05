module.exports = {
  useFileSystemPublicRoutes: false,
  exportPathMap: () => ({
    "/": { page: "/index" },
    "/auth": { page: "/auth" },
    "/postlist": { page: "/postlist" },
    "/post": { page: "/post", query: { title: "testpage" }},
  })
}