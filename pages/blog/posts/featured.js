import { Hero, FeaturedPosts } from "components";
import { useState, useEffect } from "react";

export default function FeaturedBlogs() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetch("/.netlify/functions/getFeaturedPosts").then(
        (response) => response.json()
      );
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <FeaturedPosts posts={posts.filter((_, index) => index < 4)} />
    </div>
  );
}
