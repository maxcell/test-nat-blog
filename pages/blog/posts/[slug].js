import { Post } from "components";
import { getPostData } from "../../../lib/post-utils";

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
  // const postFilenames = getPostsFiles();
  // console.log({ postFilenames });

  // const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  // console.log({ slugs });
  return {
    paths: [],
    fallback: true,
  };
}
