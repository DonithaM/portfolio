import styled from "styled-components";
import profile from "../../images/profile.png";

export const AboutWrapper = styled.div`
  background: var(--light-bg);
  height: auto;
  z-index: 1;
  padding: 100px 0 50px 0;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
  }

  /* @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: auto;
  } */
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: auto;
  padding: 0 60px;
  margin: 50px 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    padding-top: 50px;
    margin: 0 20px;
    width: 90vw;
  }

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 60%;
  padding-right: 50px;
  text-align: center;
  margin-bottom: 20px;
  /* margin-top: 10px; */

  @media screen and (max-width: 1000px) {
    padding: 20px;
    margin-top: 0px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    margin-top: 50px;
    padding: 5px;
    width: 100%;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-weight: normal;
  line-height: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 590px) {
    font-size: 25px;
    line-height: 2rem;
  }
`;

export const P2 = styled.p`
  margin-top: 24px;
  font-size: 22px;
  text-align: center;
  font-weight: normal;
  line-height: 2rem;
`;

export const P3 = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
`;

export const Span = styled.span`
  color: var(--bright-pink);
  font-weight: bold;
`;

export const ProfileColumn = styled.div`
  background: linear-gradient(rgba(256, 204, 172, 0.1), rgba(0, 0, 0, 0.1)),
    url(${profile}) no-repeat;
  border-right: 12px solid #fff;
  border-left: 12px solid #fff;
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
  justify-content: center;
  flex-direction: column;
`;

export const SkillLogos = styled.div`
  margin-top: 22px;
  display: flex;
  font-size: 50px;
  color: var(--green);

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 0px;
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
    font-size: 30px;
  }
`;

export const SkillDiv = styled.div`
  padding-left: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SkillName = styled.p`
  font-size: 15px;
  font-weight: bold;
`;
