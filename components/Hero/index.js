import React from "react";
import {
  ContentContainer,
  Image,
  ImageContainer,
  Section,
  H1,
  P,
} from "./styled";

const Hero = (props) => {
  const {
    imgUrl = "https://images.nappy.co/uploads/large/21592178174kqah8td9ipie9jypo1keymszjbhqpzk0riykxxiwbcjmt6z895otlvsxe00ymauvqdxie4admvrkzwkbidhouo8xihixud4zjink.jpg?auto=format&fm=jpg&w=1280&q=75",
    altText = "hand holding a megaphone",
    headerText = "Hi, I'm Natalie",
    subText = "This is the thing I would tell you about me if I had things to say.",
  } = props;
  return (
    <Section>
      <ImageContainer>
        <Image src={imgUrl} alt={altText} />
      </ImageContainer>
      <ContentContainer>
        <H1>{headerText}</H1>
        <P>{subText}</P>
      </ContentContainer>
    </Section>
  );
};

export default Hero;
