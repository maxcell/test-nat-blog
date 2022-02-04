import React from "react";
import PostBlurb from "../PostBlurb";

import { UL } from "./styled";

export default function PostList(props) {
  const { posts } = props;
  console.log("Post List:");
  console.log({ posts });
  return (
    <UL>
      {posts.map((post) => (
        <PostBlurb key={post.slug} post={post} />
      ))}
    </UL>
  );
}
