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
          <SidebarLink to="about" onClick={toggleMenu}>
            About
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggleMenu}>
            Skills
          </SidebarLink>
          <SidebarLink to="project" onClick={toggleMenu}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleMenu}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </MenuWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
