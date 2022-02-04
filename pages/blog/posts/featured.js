import { Hero, FeaturedPosts } from "components";
import { useState, useEffect } from "react";
import { getFeaturedPosts } from "../../../lib/post-utils";

export default function FeaturedBlogs(props) {
  const { posts } = props;

  return (
    <div>
      <FeaturedPosts posts={posts.filter((_, index) => index < 4)} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
