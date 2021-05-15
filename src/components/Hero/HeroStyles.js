import styled from "styled-components";
import bg from "../../images/bg.jpg";

export const HeroWrapper = styled.div`
  background: var(--light-bg);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px; //
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  background: linear-gradient(rgba(256, 204, 172, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg}) center center / cover;

  /* Add the blur effect */
  filter: blur(3px);
  -webkit-filter: blur(3px);

  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

// export const VideoWrapper = styled.video`
//   background: red;
//   height: 100%;
//   width: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
// `;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;

  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.45); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  border-radius: 20px;
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 50%;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 1200px) {
    top: 62%;
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    top: 62%;
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    top: 58%;
  }
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export const P = styled.p`
  margin-top: 24px;
  color: #fff;
  max-width: 600px;
  font-size: 25px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const P2 = styled.p`
  margin-top: 24px;
  color: #fff;
  max-width: 600px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 13px;
  }

  @media screen and (max-width: 500px) {
    margin-top: 12px;
    font-size: 12px;
  }
`;

export const Span = styled.span`
  color: var(--bright-pink);
`;

export const BtnWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--bright-pink);
  font-size: 40px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 27px;
  }

  @media screen and (max-width: 500px) {
    margin-top: 10px;
    font-size: 27px;
  }
`;
