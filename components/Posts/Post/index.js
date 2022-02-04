import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";

import { Article, Content } from "./styled";

export default function Post({ post }) {
  return (
    <Article>
      <PostHeader title={post?.title} imgPath={post?.imgPath} />
      <Content>
        <ReactMarkdown>{post?.content}</ReactMarkdown>
      </Content>
    </Article>
  );
}