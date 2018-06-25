import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import style from "./Nav.css";

const Nav = () => {
    return ( 
        <div className = { style.navBarHover }>
            <Navbar brand="Shirley Ramirez" right>
                <NavItem href="/"> HOME </NavItem> 
                <NavItem>
                    <Link to="/portfolio">PORTFOLIO</Link> 
                </NavItem> 
                <NavItem> 
                    <Link to="/contact">CONTACT ME</Link>
            </NavItem> 
            </Navbar> 
        </div>
    );
};

export default Nav;