import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

const Nav = () => {
  return <div>
      <Navbar brand="Shirley Ramirez" right>
        <NavItem href="/">HOME</NavItem>
        <NavItem href="/Portfolio">PORTFOLIO</NavItem>
        <NavItem href="/Contact">CONTACT ME</NavItem>
      </Navbar>
    </div>;
};
export default Nav;
