import { PostList, DUMMY_POSTS } from "components";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetch("/.netlify/functions/getAllPosts").then(
        (response) => response.json()
      );
      setPosts(posts);
    };
    getPosts();
  }, []);
  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};
export default BlogPage;
