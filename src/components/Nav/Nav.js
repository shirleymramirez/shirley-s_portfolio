import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <Navbar brand="Shirley Ramirez" right>
          <NavItem href="/">HOME</NavItem>
          <NavItem>
            <Link to="/portfolio">PORTFOLIO</Link>
          </NavItem>
          <NavItem href="/contact">CONTACT ME</NavItem>
        </Navbar>
    );
  };

export default Nav;
