import { Post } from "components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function PostDetailPage() {
  const router = useRouter();

  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const post = await fetch(
        `/.netlify/functions/getPostBySlug?slug=${router.query.slug}`
      ).then((response) => response.json());
      setPost(post);
    };
    getPost();
  }, []);
  return <Post post={post} />;
}
