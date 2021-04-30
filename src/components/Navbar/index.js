import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
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
  return (
    <>
      <Nav>
        <NavWrapper>
          {/* here, Logo is a react-router link */}
          <Logo to="/">Dona</Logo>
          <Hamburger onClick={toggleMenu}>
            <GiHamburgerMenu />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
