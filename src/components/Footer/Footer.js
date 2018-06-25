import React from "react";
import { Footer } from "react-materialize";

const FooterContent = () => {
  return (
    <Footer copyrights="© 2018 Copyright Shirley Ramirez" 
        moreLinks={<a className="grey-text text-lighten-4 right"  
            href="mailto:shirley.mramirez@yahoo.com?Subject=Hello%20Shirley" target="_top">
            shirley.mramirez@yahoo.com
        </a>} 
     /> 
   ); 
};

export default FooterContent;
