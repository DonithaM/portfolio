import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

export const ContactWrapper = styled.div`
  background: rgb(255, 194, 226);
  background: linear-gradient(
    0deg,
    rgba(255, 194, 226, 1) 5%,
    rgba(255, 255, 255, 1) 66%
  );
  height: 100vh;
  z-index: 1;
  width: auto;
  padding-left: 10px;
`;

export const Title = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  /* font-size: 40px; */
  color: var(--deep-blue);
  font-weight: normal;
`;

export const Img = styled.img`
  margin-top: 50px;
  height: 200px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  margin-top: 10px;
`;

export const P = styled.p`
  font-size: 20px;
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export const Github = styled(FaGithub)`
  color: var(--deep-blue);
  transition: transform 250ms;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin-top: 30px;

  &:hover {
    transition-duration: 0.5s;
    transform: scale(0.85);
  }
`;

export const Linkedin = styled(FaLinkedin)`
  color: var(--deep-blue);
  transition: transform 250ms;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin-top: 30px;

  &:hover {
    transition-duration: 0.5s;
    transform: scale(0.85);
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  align-items: center;
  font-size: 40px;
  color: var(--deep-blue);
`;

export const FilePdf = styled(FaRegFilePdf)`
  color: var(--deep-blue);
  font-size: 35px;
  &:hover {
    transition-duration: 0.5s;
    transform: scale(0.85);
  }
`;

export const P2 = styled.p`
  margin-top: 40px;
  font-size: 20px;
`;
