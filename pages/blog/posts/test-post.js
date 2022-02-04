import { Post } from "components";
import { getPost } from "../../../lib/post-utils";

export default function SelectedPost(props) {
  const { post } = props;
  return (
    <div>
      <Post post={post} />
    </div>
  );
}
export async function getStaticProps(context) {
  console.log({ context });
  const post = await getPost("test-post");

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}
