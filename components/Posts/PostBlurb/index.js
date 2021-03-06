import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Image,
  ImageContainer,
  ContentContainer,
  H2,
  LI,
  Time,
} from "./styled";

export default function PostBlurb(props) {
  const { title, date, excerpt, imgPath, altText, slug } = props.post;
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
