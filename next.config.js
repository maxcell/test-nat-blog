module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/posts/test-post": {
        page: "blog/posts/[slug]",
        query: { slug: "test-post" },
      },
      "/posts/test-post-not-featured": {
        page: "bolg/posts/[slug]",
        query: { slug: "test-post-not-featured" },
      },
      "/posts/second-test-post-not-featured": {
        page: "bolg/posts/[slug]",
        query: { slug: "second-test-post-not-featured" },
      },
    };
  },
};
