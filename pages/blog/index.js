import { Hero, DUMMY_POSTS, FeaturedPosts } from "components";
export default function BlogPage() {
  return (
    <div>
      <Hero subText={"This is my little blog"} />

      <FeaturedPosts posts={DUMMY_POSTS.filter((_, index) => index < 4)} />
    </div>
  );
}
