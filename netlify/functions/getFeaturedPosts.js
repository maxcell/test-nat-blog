const getPostData = require("./getPostData");
const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(process.cwd(), "content/posts");

exports.handler = function () {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const featuredPosts = allPosts.filter((post) => {
    return post.isFeatured;
  });
  const sortedPosts = featuredPosts.sort((postA, postB) =>
    postA.date < postB.date ? -1 : 1
  );
  return {
    statusCode: 200,
    body: JSON.stringify(sortedPosts),
  };
};
