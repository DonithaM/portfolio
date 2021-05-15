import React from "react";
import Typical from "react-typical";

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

import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBg />
      <Content>
        <Div>
          <H1>Hi, I am Donitha Michael</H1>
          <P>
            I am{" "}
            <Span>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "a Full-Stack Developer",
                  1500,
                  "a Front-End Developer",
                  1500,
                  "a Fast Learner",
                  1500,
                  "a Problem Solver",
                  1500,
                  "a Classical Dancer",
                  1500,
                ]}
              />
            </Span>
          </P>
          <P2>
            HTML | CSS | JavaScript | Node.js | Express | React.js | Redux |
            Bootstrap | MongoDB
          </P2>
          <P2>Learn More</P2>
          <BtnWrapper>
            <BsArrowDown />
          </BtnWrapper>
        </Div>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
