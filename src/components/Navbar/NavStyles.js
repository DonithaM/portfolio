import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  position: sticky;
  backdrop-filter: blur(8px);
  top: 0;
  z-index: 20;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(256, 204, 172, 0.45); /* Black w/opacity/see-through */
  height: 50px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* border-bottom: 3px solid var(--bright-pink); */

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
  max-width: 1250px;
  margin-right: 20px;
`;

export const Logo = styled(LinkRouter)`
  display: flex;
  align-items: center;
  color: var(--bright-pink);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: bold;
  margin-left: 20px;
  &:hover {
    color: var(--deep-blue);
    transition-duration: 0.5s;
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 20%); //
    cursor: pointer;
    font-size: 2rem;
    color: var(--green);
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: var(--bright-pink);
    transition: 0.2s ease-in-out; //both in and out
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
  color: var(--deep-blue);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out; //for out

  &:hover {
    color: var(--bright-pink);
    transition: 0.2s ease-in-out; //both in and out
  }
`;
