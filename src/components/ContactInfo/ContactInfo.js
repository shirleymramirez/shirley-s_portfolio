import React from "react";
import { Section, Row, Col, Icon} from "react-materialize";
import style from "./ContactInfo.css"

const ContactInfo = () => {
  return (
    <div className={style.container}>
    	<h5 className={style.details}> Click below for my Github, Linkedln Account or my email to connect with me</h5>
		<div className={style.linkedAccount}>
		   <Section>
			  <Row className="center">
			    <Col s={4}>
			      <Icon large>insert_chart</Icon>
				    <a href="https://github.com/shirleymramirez"
				       target="_blank"
	            	   rel="noopener noreferrer">
				      <p>Github Account</p>
				    </a>
			    </Col>
			    <Col s={4}>
			      <Icon large>insert_chart</Icon>
				    <a href="https://www.linkedin.com/in/shirley-ramirez/"
				       target="_blank"
	            	   rel="noopener noreferrer">
				      <p>Linkedln Account</p>
				    </a>
			    </Col>
			    <Col s={4}>
			      <Icon large>insert_chart</Icon>
			      <p><a 
	            	href="mailto:shirley.mramirez@yahoo.com?Subject=Hello%20Shirley" target="_top">
	            	shirley.mramirez@yahoo.com
	       		 </a></p>
			    </Col>
			  </Row>
			</Section>
		</div>
	</div>
   ); 
};

export default ContactInfo;