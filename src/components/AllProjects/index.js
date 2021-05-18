import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ProjectsWrapper } from "./ProjectStyles";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaRegLaughBeam,
} from "react-icons/fa";
import {
  H1,
  Content,
  ProjectSlider,
  ImageSlide,
  Image,
  Left,
  Right,
  ProjectInfo,
  Sliders,
  Div,
  ProjectContent,
  Note,
  BtnWrapper,
  Button,
} from "./ProjectStyles";
import GroupSlider, { GroupSlider1 } from "./ProjectsSlider";

const Projects = ({ slides }) => {
  const history = useHistory();
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);
  const length = slides.length;

  const handleRoute = () => {
    history.push("/");
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide1 = () => {
    setCurrentImage1(currentImage1 === length - 1 ? 0 : currentImage1 + 1);
  };

  const prevSlide1 = () => {
    setCurrentImage1(currentImage1 === 0 ? length - 1 : currentImage1 - 1);
  };

  const nextSlide2 = () => {
    setCurrentImage2(currentImage2 === length - 1 ? 0 : currentImage2 + 1);
  };

  const prevSlide2 = () => {
    setCurrentImage2(currentImage2 === 0 ? length - 1 : currentImage2 - 1);
  };

  return (
    <>
      <ProjectsWrapper>
        <H1>-- All Projects --</H1>

        <Content>
          <ProjectSlider>
            <Sliders>
              <Div>
                <ProjectInfo>
                  <h2>Tech Ninja (Group Project)</h2>
                  <ProjectContent>
                    <ul>
                      <li>
                        E-commerce project developed as part of my bootcamp
                        alongside 3 other colleagues to sell tech wearables.
                      </li>
                      <li>
                        Users can view products of different tech companies,
                        filter by different categories, add items to their cart
                        and purchase them.
                      </li>
                      <li>
                        Technologies Used: HTML, CSS, JavaScript, Express,
                        Node.js, React.js, Styled components and Redux.
                      </li>
                      <li>
                        Accomplishment: Learned to work with a competent team in
                        an AGILE SCRUM environment and developed the application
                        in less than a week.
                      </li>
                    </ul>
                  </ProjectContent>
                </ProjectInfo>
                <Left>
                  <FaArrowAltCircleLeft onClick={prevSlide1} />
                </Left>
                <Right>
                  <FaArrowAltCircleRight onClick={nextSlide1} />
                </Right>
                {GroupSlider.map((item, i) => {
                  return (
                    <ImageSlide
                      className={i === currentImage1 ? "item active" : "item"}
                      key={i}
                    >
                      {i === currentImage1 && (
                        <Image src={item.image} alt="Project-1-images" />
                      )}
                    </ImageSlide>
                  );
                  // ;
                })}
              </Div>
              <Div>
                <ProjectInfo>
                  <h2>YelpCamp</h2>
                  <ProjectContent>
                    <ul>
                      <li>
                        Dynamic Full Stack Web Application using CRUD
                        functionalities for campground listings in reference to
                        Yelp.
                      </li>
                      <li>
                        Has secure User registration and login feature. Passport
                        JS used as middleware for authentication
                      </li>
                      <li>
                        Developed web services using REST APIs and employed
                        flash messages to improve usability with connect-Flash
                        package
                      </li>
                      <li>
                        Technologies Used: HTML/CSS, jQuery, JavaScript, NodeJS,
                        ExpressJS, MongoDB, Mongoose, Passport JS, Bootstrap
                      </li>
                    </ul>
                    <a
                      href="https://ancient-inlet-54711.herokuapp.com"
                      target="_blank"
                    >
                      Link to Live Demo of Website
                    </a>
                  </ProjectContent>
                </ProjectInfo>
                <Left>
                  <FaArrowAltCircleLeft onClick={prevSlide2} />
                </Left>
                <Right>
                  <FaArrowAltCircleRight onClick={nextSlide2} />
                </Right>
                {GroupSlider1.map((item, i) => {
                  return (
                    <ImageSlide
                      className={i === currentImage2 ? "item active" : "item"}
                      key={i}
                    >
                      {i === currentImage2 && (
                        <Image src={item.image} alt="Project-1-images" />
                      )}
                    </ImageSlide>
                  );
                })}
              </Div>
            </Sliders>
          </ProjectSlider>
        </Content>
        <Note>
          <h3>
            More Projects coming soon... <FaRegLaughBeam />
          </h3>

          <p>
            <span>Currently Learning:</span> Next.js and Headless Content
            Management System
          </p>
        </Note>
        <BtnWrapper>
          <Button onClick={handleRoute}>Go back</Button>
        </BtnWrapper>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
