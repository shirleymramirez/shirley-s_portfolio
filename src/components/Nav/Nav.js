import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Navbar brand="Shirley Ramirez" right>
        <div className="link-navbar">
          <NavItem href="home.html">HOME</NavItem>
          <NavItem href="portfolio.html">PORTFOLIO</NavItem>
          <NavItem href="contact-me.html">CONTACT ME</NavItem>
        </div>
      </Navbar>
    </div>
  );
};
export default Nav;
