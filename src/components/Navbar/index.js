import React from "react";
import { GiHamburgerMenu, GiTechnoHeart } from "react-icons/gi";
import { animateScroll as scroll } from "react-scroll";
import About from "../About";
import {
  Nav,
  NavWrapper,
  Logo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavStyles";

const Navbar = ({ toggleMenu }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavWrapper>
          {/* here, Logo is a react-router link */}
          <Logo to="/" onClick={toggleHome}>
            <GiTechnoHeart />
          </Logo>
          <Hamburger onClick={toggleMenu}>
            <GiHamburgerMenu />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Featured
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
