import styled from "styled-components";
import profile from "../../images/profile.png";

export const AboutWrapper = styled.div`
  background: var(--light-bg);
  height: 110vh;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: auto;
  padding: 0 60px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoColumn = styled.div`
  color: var(--deep-blue);
  border-radius: 20px;
  /* position: absolute;
  left: 50%; */
  z-index: 2;
  width: 80%;
  padding-right: 50px;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

export const P = styled.p`
  margin-top: 24px;
  font-size: 20px;
  text-align: center;
  font-weight: normal;
  line-height: 1.9rem;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const P2 = styled.p`
  margin-top: 24px;
  font-size: 16px;
  text-align: center;
  font-weight: normal;
  line-height: 1.9rem;

  /* @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: none;
  } */
`;

export const P3 = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
`;

export const Span = styled.span`
  color: var(--bright-pink);
  font-weight: bold;
`;

export const ProfileColumn = styled.div`
  background: linear-gradient(rgba(256, 204, 172, 0.1), rgba(0, 0, 0, 0.1)),
    url(${profile}) no-repeat;
  border-right: 12px solid var(--bright-pink);
  padding: 15px;
  margin: 18px;
  border-radius: 50%;
  height: 370px;
  min-width: 280px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    z-index: 2;
    height: 320px;
    min-width: 280px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 500px) {
    padding: 20px;
    z-index: 2;
    height: 320px;
    min-width: 280px;
    margin-bottom: 50px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillLogos = styled.div`
  margin-top: 22px;
  margin-left: 90px;
  font-size: 35px;
  display: flex;
  justify-content: space-evenly;
  max-width: 600px;
  color: #3d6f38;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    margin-left: 0px;
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
  }
`;
