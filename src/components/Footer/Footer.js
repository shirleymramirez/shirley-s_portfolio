import React from "react";
import { Footer } from "react-materialize";
import style from "./Footer.css";

const FooterContent = () => {
  return (
    <Footer className={style.footer} copyrights="© 2018 Copyright Shirley Ramirez" /> 
   ); 
};

export default FooterContent;
