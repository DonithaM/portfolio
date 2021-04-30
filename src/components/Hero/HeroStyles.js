import styled from "styled-components";
import bg from "../../images/bg.jpg";

export const HeroWrapper = styled.div`
  background: var(--light-bg);
  height: 100vh;
  background: url(${bg}) center center / cover;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px; //
  position: relative;
  z-index: 1;
`;

// export const HeroBg = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// `;

// export const VideoWrapper = styled.video`
//   background: red;
//   height: 100%;
//   width: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
// `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px; //
`;

export const H1 = styled.h1`
  color: var(--deep-blue);
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const P = styled.p`
  margin-top: 24px;
  color: var(--deep-blue);
  max-width: 600px;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
