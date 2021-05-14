import React from "react";
import {
  HeroWrapper,
  BtnWrapper,
  Content,
  H1,
  P,
  P2,
  Div,
  HeroBg,
  Span,
} from "./HeroStyles";
//import Video from "../../bgVideo/video.mp4";

import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBg>
        {/* <VideoWrapper autoPlay loop muted src={Video} type="video/mp4" />
        background Image if needed */}
      </HeroBg>
      <Div>
        <Content>
          <H1>Hi, I am Donitha Michael</H1>
          <P>
            I am a <Span>Full-Stack Developer</Span>
          </P>
          <P2>
            HTML | CSS | JavaScript | Node.js | Express | React.js | Redux |
            Bootstrap | MongoDB
          </P2>
          <P2>Learn More</P2>
          <BtnWrapper>
            <BsArrowDown />
          </BtnWrapper>
        </Content>
      </Div>
    </HeroWrapper>
  );
};

export default Hero;
