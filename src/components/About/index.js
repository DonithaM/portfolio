import React, { useEffect } from "react";
import selfTaught from "../../images/self-taught.svg";
import progress from "../../images/progress.svg";
import study from "../../images/study.svg";
import job from "../../images/job.svg";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  AboutWrapper,
  Content,
  InfoColumn,
  ProfileColumn,
  H1,
  P2,
  P3,
  Span,
  TitleSpan,
  Skills,
  SkillLogos,
  SkillDiv,
  SkillName,
  Img,
  Div,
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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <AboutWrapper id={"about"}>
        <Content>
          <InfoColumn>
            <H1>
              {/* -- Hi, I am Donitha Michael, a{" "}
              <TitleSpan>Full Stack Web Developer</TitleSpan> based in Canada -- */}
              -- My Journey into Web Development--
            </H1>
            <Div data-aos="fade-in">
              <Img src={selfTaught} />
              <P2>
                After pursuing a{" "}
                <Span>
                  Master's Degree in Electrical and Computer Engineering
                </Span>{" "}
                from Concordia University, I began my journey as a self taught
                developer and learned to code in my spare time.
              </P2>
            </Div>
            <Div data-aos="fade-in">
              <P2>
                I completed a Udemy Full Stack Web Development course and I
                worked as a<Span> Junior Web Developer</Span> for a few months.
              </P2>
              <Img src={progress} />
            </Div>
            <Div data-aos="fade-in">
              <Img src={study} />
              <P2>
                Later, I joined{" "}
                <Span>Concordia's Full Stack Development Bootcamp,</Span> which
                helped me learn many technologies in a short period of time.
              </P2>
            </Div>
            <Div data-aos="fade-in">
              <P2>
                I enjoy learning new technologies by building projects that
                spark my interest. I now look forward to taking up{" "}
                <Span>new roles and challenges!</Span>
              </P2>
              <Img src={job} />
            </Div>

            {/* <P2>
              <Span>
                In my spare time, I learn and enjoy expressing myself through
                classical dance.
              </Span>
            </P2> */}

            {/* <Skills>
              <P3>My Tech Stack:</P3>
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
            </Skills> */}
          </InfoColumn>
          <ProfileColumn data-aos="fade-up"></ProfileColumn>
        </Content>
      </AboutWrapper>
    </>
  );
};

export default About;
