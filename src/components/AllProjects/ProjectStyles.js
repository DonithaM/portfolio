import { DiVisualstudio } from "react-icons/di";
import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  height: 100vh;
  background: rgb(255, 223, 203);
  background: linear-gradient(
    180deg,
    rgba(255, 223, 203, 1) 0%,
    rgba(255, 255, 255, 1) 48%,
    rgba(255, 217, 237, 1) 100%
  );
  height: auto;
  z-index: 1;
  /* margin-bottom: 40px; */
  width: auto;
  padding-left: 10px;
`;

export const H1 = styled.h1`
  padding-top: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--deep-blue);
  font-weight: normal;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  margin: 0 50px;

  @media screen and (max-width: 1200px) {
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
  /* position: relative; */
  height: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    width: auto;
    padding: 100px;
  }
`;

export const Image = styled.img`
  width: 700px;
  margin-bottom: 50px;
  height: 450px;
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
export const ImageSlide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.05);
  }
`;

export const Left = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 5px;
  font-size: 2.5rem;
  color: var(--bright-pink);
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
    top: 55%;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    top: 60%;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    top: 65%;
  }
`;
export const Right = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 5px;
  font-size: 2.5rem;
  color: var(--bright-pink);
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 1200px) {
    font-size: 2rem;
    top: 55%;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    top: 60%;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    top: 65%;
  }
`;

export const Div = styled.div`
  position: relative;
  padding-bottom: 50px;
`;
export const Sliders = styled.div``;

export const ProjectInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
  h2 {
    color: var(--bright-pink);
    margin-bottom: 20px;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  line-height: 1.5rem;
  color: var(--deep-blue);
  font-weight: bold;
  a {
    padding-top: 15px;
    text-decoration: none;
  }
`;

export const Note = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  p {
    padding-top: 20px;
  }
  span {
    font-weight: bold;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
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
  transition: transform 250ms;

  &:hover {
    transition-duration: 0.5s;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }
`;
