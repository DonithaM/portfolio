import React, { useEffect } from "react";
import Aos from "aos";
import {
  SkillsWrapper,
  H1,
  Card,
  Title,
  CardsWrapper,
  CertsWrapper,
  Items,
} from "./SkillsStyles";

import Diploma from "../../images/Concordia_Diploma.pdf";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <SkillsWrapper id={"skills"}>
        <H1>-- My Skills --</H1>
        <CardsWrapper data-aos="fade-up">
          <Card>
            <Title>Front-End</Title>
            <Items>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Redux</li>
            </Items>
          </Card>
          <Card>
            <Title>Back-End</Title>
            <Items>
              <li>RESTful APIs</li>
              <li>CRUD</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </Items>
          </Card>
          <Card>
            <Title>Tools</Title>
            <Items>
              <li>GitHub</li>
              <li>Git</li>
              <li>NPM</li>
              <li>Jira</li>
              <li>Confluence</li>
            </Items>
          </Card>
        </CardsWrapper>
        <H1> -- Certifications --</H1>
        <CertsWrapper>
          <p>Udemy Full Stack Web Development : </p>
          <a
            href="https://www.udemy.com/certificate/UC-DAYDUHL6/"
            target="_blank"
          >
            View Certificate
          </a>
        </CertsWrapper>
        <CertsWrapper>
          <p>Concordia's Full Stack Web Development Diploma : </p>
          <a href={Diploma}>View Certificate</a>
        </CertsWrapper>
        <CertsWrapper>
          <p>TestDome HTML/CSS and JavaScript Certificate : </p>
          <a
            href="https://app.testdome.com/cert/df98653e26e8442a8a0f402ca6f8e709"
            class="testdome-certificate-stamp silver"
            target="_blank"
          >
            View Certificate
          </a>
        </CertsWrapper>
      </SkillsWrapper>
    </>
  );
};

export default Skills;
