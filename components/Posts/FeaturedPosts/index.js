import React from "react";
import PostList from "../PostList";

function FeaturedPosts(props) {
  const { posts } = props;
  console.log("Featured Posts");
  console.log({ props });
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostList posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
