import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  background: rgb(255, 236, 224);
  background: linear-gradient(
    180deg,
    rgba(255, 236, 224, 1) 28%,
    rgba(255, 255, 255, 1) 76%
  );
  height: auto;
  z-index: 1;
  margin-bottom: 40px;
  width: auto;
  padding-left: 10px;

  /* @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: auto;
  } */
`;

export const Title = styled.h1`
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;
  margin: 0 50px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 680px) {
    width: 90vw;
    margin: 0 10px;
  }
`;
export const ProjectSlider = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* width: 900px; */
  padding-bottom: 50px;

  @media screen and (max-width: 1200px) {
    width: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  /* @media screen and (max-width: 670px) {
    width: 100%;
  } */

  @media screen and (max-width: 400px) {
    width: auto;
    padding: 100px;
  }
`;

export const Image = styled.img`
  width: 700px;
  height: 500px;
  border-radius: 10px;
  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 700px) {
    width: 450px;
    height: 300px;
  }
`;

export const Left = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 5px;
  font-size: 3rem;
  color: var(--bright-pink);
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
export const Right = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 5px;
  font-size: 3rem;
  color: var(--bright-pink);
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const ImageSlide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;

  &.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  color: red;
  margin: 0 20px 20px 50px;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  background-color: rgba(255, 238, 227); /* Fallback color */
  background-color: rgba(255, 238, 227, 0.5);
  border: 2.8px solid var(--bright-pink);
  border-radius: 8px;
  color: var(--deep-blue);
  font-weight: bold;
  //box-shadow
  -webkit-box-shadow: 0px 1px 8px -1px rgba(247, 37, 133, 0.69);
  box-shadow: 0px 1px 8px -1px rgba(247, 37, 133, 0.69);
  cursor: pointer;
  transition-duration: 0.5s ease;

  &:hover {
    transition-duration: 0.5s;
    transform: scale(1.05);
  }
`;
