import { Post } from "components";
import { useRouter } from "next/router";
export default function PostDetailPage() {
  const router = useRouter();
  console.log({ router });
  return <Post />;
}
