import { Hero, FeaturedPosts } from "components";
import { useState, useEffect } from "react";
// import path from "path";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetch("/.netlify/functions/getFeaturedPosts").then(
        (response) => response.json()
      );
      setPosts(posts);
    };
    getPosts();
  }, []);
  return (
    <div>
      <Hero subText={"This is my little blog"} />
      <FeaturedPosts posts={posts.filter((_, index) => index < 4)} />
    </div>
  );
}

// export async function getStaticProps() {
//   const functionsDirectory = path.join(process.cwd(), "netlify/functions");
//   const dataFilePath = path.join(functionsDirectory, "getAllPosts");
//   const getPosts = async () => {
//     const posts = await fetch("/.netlify/functions/getAllPosts").then(
//       (response) => JSON.stringify(response)
//     );

//     return Promise.all(posts);
//   };
//   const postsArr = getPosts();

//   return {
//     props: {
//       posts: postsArr,
//       fakeProp: ["so fake"],
//       filePath: dataFilePath,
//     },
//   };
// }
