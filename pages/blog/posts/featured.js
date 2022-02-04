import { Hero, FeaturedPosts, PostList } from "components";
import { useState, useEffect } from "react";
// import path from "path";

export default function BlogPage() {
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
  console.log("INDEX: GET FEATURED POSTS: ", posts);
  return (
    <div>
      {/* <Hero subText={"This is my little blog"} /> */}
      {/* <PostList posts={posts} /> */}
      <PostList posts={posts.filter((_, index) => index < 4)} />
    </div>
  );
}
