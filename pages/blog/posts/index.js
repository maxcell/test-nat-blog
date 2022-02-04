import { PostList } from "components";
import { getAllPosts } from "../../../lib/post-utils";

const BlogPage = (props) => {
  const { posts } = props;
  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};
export default BlogPage;

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
