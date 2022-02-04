import { Hero, FeaturedPosts } from "components";
import { getFeaturedPosts } from "../../lib/post-utils";

export default function BlogPage(props) {
  const { posts } = props;
  return (
    <div>
      <Hero subText={"This is my little blog"} />
      <FeaturedPosts posts={posts.filter((_, index) => index < 4)} />
    </div>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
