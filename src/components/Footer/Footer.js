import React from "react";
import { Footer } from "react-materialize";
import "./Footer.css";

const FooterContent = () => {
  return ( 
    <Footer copyrights="© 2018 Copyright Shirley Ramirez"
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">
          <a className="grey-text text-lighten-4 right">
            <h6>Email me at:</h6>
            <a href="mailto:shirley.mramirez@yahoo.com?Subject=Hello%20Shirley" target="_top">
              shirley.mramirez@yahoo.com
            </a>
          </a>
          <a className="grey-text text-lighten-4 right">
            <a href="https://www.linkedin.com/in/shirley-ramirez/" target="_blank" rel="noopener noreferrer">
              Linkedln
            </a>
          </a>

          <a className="grey-text text-lighten-4 right">
            <a href="https://github.com/shirleymramirez" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </a>
        </a>} />
  );
};

export default FooterContent;
