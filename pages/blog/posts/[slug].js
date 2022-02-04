import { Post } from "components";
import { getPostData, getPostsFiles } from "../../../lib/post-utils";

export default function PostDetailPage(props) {
  const { post } = props;

  if (!post) {
    return <p>Loading</p>;
  }

  return <Post post={post} />;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = await getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
