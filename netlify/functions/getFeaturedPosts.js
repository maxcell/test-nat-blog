const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "content/posts");

const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // removes file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

exports.handler = function (event, context, callback) {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // sort posts by date
  // const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return {
    statusCode: 200,
    body: JSON.stringify(featuredPosts),
  };
};
