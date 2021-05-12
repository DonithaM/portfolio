import React, { useState } from "react";
import SliderData from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

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
      <FeaturedWrapper>
        <Title>Featured Project</Title>
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
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
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
