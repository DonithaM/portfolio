import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: var(--deep-blue);
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  font-size: 1.7rem;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 50px); //
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 50px); //
  }
`;

export const SidebarLink = styled(LinkScroll)`
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out; //
  cursor: pointer;

  &:hover {
    color: var(--bright-pink);
    transition: 0.2s ease-in-out;
  }
`;
