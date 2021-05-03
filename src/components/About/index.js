import React from "react";
import {
  AboutWrapper,
  Content,
  InfoColumn,
  ProfileColumn,
  H1,
  P2,
  P3,
  Span,
  Skills,
  SkillLogos,
  SkillDiv,
  SkillName,
} from "./AboutStyles";

import { DiCss3, DiNpm } from "react-icons/di";
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
            <H1>
              Hi, I am Donitha Michael, a <Span>Full Stack Web Developer</Span>{" "}
              based in Canada.
            </H1>
            <P2>
              I began my journey as a self taught developer and learned to code
              in my spare time. I completed a Udemy Full Stack Wed Development
              course and I worked as a<Span> Junior Web Developer</Span> for a
              few months. Later, I decided to join{" "}
              <Span>Concordia's Full Stack Development Bootcamp,</Span> which
              helped me learn many technologies in a short period of time. Now,
              having completed two courses and with a 3-month professional work
              experience, I am looking forward to taking up new roles and
              challenges!
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
                <SkillDiv>
                  <SiHtml5 />
                  <SkillName>HTML5</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <DiCss3 />
                  <SkillName>CSS3</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <SiJavascript />
                  <SkillName>JavaScript</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <DiNpm />
                  <SkillName>NPM</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <SiReact />
                  <SkillName>React.js</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <SiRedux />
                  <SkillName>Redux</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <FaNodeJs />
                  <SkillName>Node.js</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <SiMongodb />
                  <SkillName>MongoDB</SkillName>
                </SkillDiv>
                <SkillDiv>
                  <SiBootstrap />
                  <SkillName>Bootstrap</SkillName>
                </SkillDiv>
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
