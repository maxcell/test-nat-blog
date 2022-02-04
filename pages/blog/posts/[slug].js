import { Post } from "components";
import { getPostData, getPostsFiles } from "../../../lib/post-utils";

export default function PostDetailPage(props) {
  const { post } = props;

  // return <Post post={post} />;
  return <h1>Yooooooo</h1>;
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const { slug } = params;
//   const post = await getPostData(slug);

//   return {
//     props: {
//       post,
//     },
//     revalidate: 600,
//   };
// }

// export function getStaticPaths() {
//   const postFilenames = getPostsFiles();
//   console.log({ postFilenames });

//   const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
//   console.log({ slugs });
//   return {
//     paths: slugs.map((slug) => ({ params: { slug } })),
//     fallback: false,
//   };
// }
