import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Image,
  ImageContainer,
  ContentContainer,
  H2,
  LI,
  P,
  Time,
} from "./styled";

export default function PostBlurb(props) {
  const {
    title = "Post title",
    date = Date.now(),
    excerpt = "The post excerpt",
    imgPath = "https://images.nappy.co/uploads/large/21592178174kqah8td9ipie9jypo1keymszjbhqpzk0riykxxiwbcjmt6z895otlvsxe00ymauvqdxie4admvrkzwkbidhouo8xihixud4zjink.jpg?auto=format&fm=jpg&w=1280&q=75",
    altText = "hand holding a megaphone",
    slug = "test-post",
  } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // TODO: will need to add images named as the slug name
  //   const imgPath = `/images/posts/${slug}/${image}`
  return (
    <LI>
      <Link href={`/blog/posts/${props.post.slug}`}>
        <a>
          <ImageContainer>
            <Image src={imgPath} alt={altText} />
          </ImageContainer>
          <ContentContainer>
            <H2>
              <ReactMarkdown>{title}</ReactMarkdown>
            </H2>
            <Time>
              <ReactMarkdown>{formattedDate}</ReactMarkdown>
            </Time>
            <ReactMarkdown>{excerpt}</ReactMarkdown>
          </ContentContainer>
        </a>
      </Link>
    </LI>
  );
}