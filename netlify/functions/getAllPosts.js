const getPostData = require("./getPostData");
const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(process.cwd(), "content/posts");

exports.handler = function () {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // sort posts by date
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date < postB.date ? -1 : 1
  );

  return {
    statusCode: 200,
    body: JSON.stringify(sortedPosts),
  };
};
