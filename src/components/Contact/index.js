import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import dev from "../../images/dev.svg";
import Pdf from "../../images/Donitha_Resume.pdf";
import { HiOutlineMail } from "react-icons/hi";
import Aos from "aos";
import {
  ContactWrapper,
  Title,
  H1,
  Img,
  Content,
  Icon,
  P,
  FilePdf,
  Github,
  Linkedin,
  Div,
} from "./ContactStyles";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <ContactWrapper id={"contact"}>
        <Title>
          <H1>-- Let's work together --</H1>
        </Title>
        <Icon>
          <Img src={dev} data-aos="fade-in" />
        </Icon>
        <Content>
          <Div>
            <HiOutlineMail />
            <P>donithamichael1@gmail.com</P>
          </Div>
          <Div>
            <a href={Pdf} target="_blank">
              <FilePdf />
            </a>
            <P>Grab my resume</P>
          </Div>
        </Content>
        <Content>
          <Link
            to={{ pathname: "https://github.com/DonithaM" }}
            target="_blank"
          >
            <Github />
          </Link>
          <Link
            to={{ pathname: `https://www.linkedin.com/in/donithamichael/` }}
            target="_blank"
          >
            <Linkedin />
          </Link>
        </Content>
      </ContactWrapper>
    </>
  );
};

export default Contact;
