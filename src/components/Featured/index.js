import React, { useState } from "react";
import SliderData from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FeaturedWrapper,
  Title,
  ProjectSlider,
  ProjectInfo,
  Content,
  Image,
  Left,
  Right,
  ImageSlide,
  BtnWrapper,
  Button,
  Summary,
  H1,
  UL,
  Stack,
  Span,
  DivLink,
} from "./FeaturedStyles";

const FeaturedProject = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  console.log(currentImage);
  return (
    <>
      <FeaturedWrapper id={"project"}>
        <Title>-- Featured Project --</Title>
        <Content>
          <ProjectSlider>
            <Left>
              <FaArrowAltCircleLeft onClick={prevSlide} />
            </Left>
            <Right>
              <FaArrowAltCircleRight onClick={nextSlide} />
            </Right>

            {SliderData.map((item, i) => {
              return (
                <ImageSlide
                  className={i === currentImage ? "item active" : "item"}
                  key={i}
                >
                  {i === currentImage && (
                    <Image src={item.image} alt="Project-1-images" />
                  )}
                </ImageSlide>
              );
              // ;
            })}
          </ProjectSlider>
          <ProjectInfo>
            <Summary>
              <H1>Take Me There</H1>
            </Summary>
            <UL>
              <li>
                Dynamic Full Stack Web Application (MERN) using Rest APIs and
                CRUD functionalities
              </li>
              <li>
                Application shows top hangout spots in Toronto including cafes,
                restaurants, museums and other attractions
              </li>
              <li>Simple authentication for register and login</li>
              <li>
                Users can view reviews posted by other users and also create and
                post their own reviews with images based on the events they
                attended or places they visited
              </li>
            </UL>
            <Stack>
              <Span>Technologies Used</Span>: HTML, CSS, JavaScript, Express,
              Node.js, React.js, Styled components, MongoDB, Cloudinary and
              external APIs
            </Stack>
            <DivLink>
              Watch a short Demo :{" "}
              <a
                href="https://www.youtube.com/watch?v=9iN-z3mqbFs"
                target="_blank"
              >
                Link to Demo
              </a>
            </DivLink>

            <DivLink>
              Go to Github Repo :{" "}
              <a
                href="https://github.com/DonithaM/take_me_there"
                target="_blank"
              >
                Link to repo
              </a>
            </DivLink>
          </ProjectInfo>
        </Content>
        <BtnWrapper>
          <Button>View more Projects</Button>
        </BtnWrapper>
      </FeaturedWrapper>
    </>
  );
};

export default FeaturedProject;
