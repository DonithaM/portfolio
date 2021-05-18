import React from "react";
import {
  SidebarWrapper,
  Icon,
  CloseIcon,
  MenuWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarWrapper isOpen={isOpen} onClick={toggleMenu}>
      <Icon onClick={toggleMenu}>
        <CloseIcon />
      </Icon>
      <MenuWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            onClick={toggleMenu}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="skills"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            onClick={toggleMenu}
          >
            Skills
          </SidebarLink>
          <SidebarLink
            to="project"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            onClick={toggleMenu}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            onClick={toggleMenu}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </MenuWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
