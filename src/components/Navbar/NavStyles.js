import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--deep-blue);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 50px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const Logo = styled(LinkRouter)`
  display: flex;
  align-items: center;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
`;

export const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%); //
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out; //for out

  &.active {
    border-bottom: 3px solid red;
  }

  &:hover {
    color: var(--bright-pink);
    transition: 0.2s ease-in-out; //both in and out
  }
`;
