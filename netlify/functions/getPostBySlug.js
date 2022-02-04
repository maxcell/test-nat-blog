const getPostData = require("./getPostData");
const fs = require("fs");
const path = require("path");

const postsDirectory = path.join(process.cwd(), "content/posts");

exports.handler = function (event) {
  const { slug } = event.queryStringParameters;
  const postFiles = fs.readdirSync(postsDirectory);
  const posts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const post = posts.filter((p) => p.slug === slug)[0];
  return {
    statusCode: 200,
    body: JSON.stringify(post),
  };
};
