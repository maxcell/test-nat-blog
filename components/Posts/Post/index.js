import Link from "next/link";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import { DUMMY_POST as post } from "../../DUMMY_DATA.JS";

import { Article, Content } from "./styled";

export default function Post() {
  return (
    <Article>
      <PostHeader title={post.title} imgPath={post.imgPath} />
      <Content>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Content>
    </Article>
  );
}
