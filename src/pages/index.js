import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
    </>
  );
};

export default Home;
