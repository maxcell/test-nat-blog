import { Post } from "components";
import { getAllPosts } from "../../../lib/post-utils";

export default function PostDetailPage(props) {
  const { post } = props;

  return <Post post={post} />;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const posts = await getAllPosts();

  const post = posts.filter(post.slug === slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  // const postFilenames = await getPostsFiles();
  // console.log({ postFilenames });

  // const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  // console.log({ slugs });
  return {
    paths: [],
    fallback: false,
  };
}
