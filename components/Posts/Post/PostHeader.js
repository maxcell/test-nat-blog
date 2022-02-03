import React from "react";
import { Header, H1, Image, ImageContainer } from "./styled";

function PostHeader(props) {
  const { title, imgPath } = props;
  return (
    <Header>
      <H1>{title}</H1>
      <ImageContainer>
        <Image src={imgPath} alt={title} />
      </ImageContainer>
    </Header>
  );
}

export default PostHeader;
