import React from "react";
import { Section, Row, Col, Icon} from "react-materialize";

const ContactInfo = () => {
  return (
    <div>
	   <Section>
		  <Row className='center'>
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
		      <p>Email-add</p>
		    </Col>
		  </Row>
		</Section>
	</div>
   ); 
};

export default ContactInfo;