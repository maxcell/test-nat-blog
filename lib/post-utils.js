const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

let postsDirectory = path.join(process.cwd(), "content", "posts");

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    content,
    ...data,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // sort posts by date
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date < postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
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
  return sortedPosts;
};
export const getSinglePost = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const singlePost = allPosts.filter((post) => {
    return post.slug === slug;
  });
  return singlePost;
};
