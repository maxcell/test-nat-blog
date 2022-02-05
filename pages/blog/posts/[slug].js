import { Post } from "components";
import { getPostData, getPostsFiles } from "../../../lib/post-utils";

export default function PostDetailPage(props) {
  const { post } = props;

  console.log(post)
  if (!post) {
    return <p>Loading</p>;
  }

  return <Post post={post} />
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = await getPostData(slug);

  console.log({ onPage: post })
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
