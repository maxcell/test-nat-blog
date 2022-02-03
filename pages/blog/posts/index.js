import { FeaturedPosts, PostList, DUMMY_POSTS } from "components";

export default function BlogPage() {
  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={DUMMY_POSTS} />
    </div>
  );
}
