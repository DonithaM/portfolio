import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
import FeaturedProject from "../components/Featured";
import SliderData from "../components/Featured/SliderData";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject slides={SliderData} />
      <Contact />
    </>
  );
};

export default Home;
