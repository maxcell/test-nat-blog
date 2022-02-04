import { Post } from "components";
import { getPostData } from "../../../lib/post-utils";

export default function SelectedPost(props) {
  const { post } = props;
  return (
    <div>
      <Post post={post} />
    </div>
  );
}
export async function getStaticProps(context) {
  const post = await getPostData("second-test-post-not-featured");

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}
