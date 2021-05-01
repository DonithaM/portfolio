import React from "react";
import {
  AboutWrapper,
  Content,
  InfoColumn,
  ProfileColumn,
  P,
  P2,
  P3,
  Span,
  Skills,
  SkillLogos,
} from "./AboutStyles";

import { DiCss3 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiReact,
  SiHtml5,
  SiBootstrap,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <AboutWrapper>
        <Content>
          <InfoColumn>
            <P>
              Hi, I am Donitha Michael, a <Span>Full Stack Web Developer</Span>{" "}
              based in Canada.
            </P>
            <P2>
              I began my journey as a self taught developer and learned to code
              in my spare time. I worked as a<Span> junior dev trainee</Span>{" "}
              for a few months and later joined Concordia's Full Stack
              Development Bootcamp, which helped me learn many technologies in a
              short period of time.
            </P2>
            <P2>
              I enjoy learning new technologies by building projects that spark
              my interest
            </P2>
            <P2>
              <Span>
                In my spare time, I learn and enjoy expressing myself through
                classical dance.
              </Span>
            </P2>

            <Skills>
              <P3>Technologies</P3>
              <SkillLogos>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
                <SiReact />
                <SiRedux />
                <FaNodeJs />
                <SiMongodb />
                <SiBootstrap />
              </SkillLogos>
            </Skills>
          </InfoColumn>
          <ProfileColumn></ProfileColumn>
        </Content>
      </AboutWrapper>
    </>
  );
};

export default About;
