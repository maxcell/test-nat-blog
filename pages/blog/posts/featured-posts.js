import { FeaturedPosts } from "components";

const DUMMY_POSTS = [
  {
    title: "Post title",
    date: Date.now(),
    excerpt: "The post excerpt",
    imgPath:
      "https://images.nappy.co/uploads/large/21592178174kqah8td9ipie9jypo1keymszjbhqpzk0riykxxiwbcjmt6z895otlvsxe00ymauvqdxie4admvrkzwkbidhouo8xihixud4zjink.jpg?auto=format&fm=jpg&w=1280&q=75",
    altText: "hand holding a megaphone",
    slug: "test-post",
  },
  {
    title: "Post title",
    date: Date.now(),
    excerpt: "The post excerpt",
    imgPath:
      "https://images.nappy.co/uploads/large/21592178174kqah8td9ipie9jypo1keymszjbhqpzk0riykxxiwbcjmt6z895otlvsxe00ymauvqdxie4admvrkzwkbidhouo8xihixud4zjink.jpg?auto=format&fm=jpg&w=1280&q=75",
    altText: "hand holding a megaphone",
    slug: "test-post1",
  },
  {
    title: "Post title",
    date: Date.now(),
    excerpt: "The post excerpt",
    imgPath:
      "https://images.nappy.co/uploads/large/21592178174kqah8td9ipie9jypo1keymszjbhqpzk0riykxxiwbcjmt6z895otlvsxe00ymauvqdxie4admvrkzwkbidhouo8xihixud4zjink.jpg?auto=format&fm=jpg&w=1280&q=75",
    altText: "hand holding a megaphone",
    slug: "test-post2",
  },
  {
    title: "Post title",
    date: Date.now(),
    excerpt: "The post excerpt",
    imgPath:
      "https://images.nappy.co/uploads/large/21592178174kqah8td9ipie9jypo1keymszjbhqpzk0riykxxiwbcjmt6z895otlvsxe00ymauvqdxie4admvrkzwkbidhouo8xihixud4zjink.jpg?auto=format&fm=jpg&w=1280&q=75",
    altText: "hand holding a megaphone",
    slug: "test-post3",
  },
  {
    title: "Post title",
    date: Date.now(),
    excerpt: "The post excerpt",
    imgPath:
      "https://images.nappy.co/uploads/large/21592178174kqah8td9ipie9jypo1keymszjbhqpzk0riykxxiwbcjmt6z895otlvsxe00ymauvqdxie4admvrkzwkbidhouo8xihixud4zjink.jpg?auto=format&fm=jpg&w=1280&q=75",
    altText: "hand holding a megaphone",
    slug: "test-post4",
  },
];

export default function BlogPage() {
  return (
    <div>
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}
