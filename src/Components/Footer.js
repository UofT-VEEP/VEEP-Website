import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import {Container, Row, Col, Button, ListGroup} from 'react-bootstrap';

class Footer extends React.Component {
  
  render() {
    return (
        <Container>
            <Row className="FooterRow" id="FirstFooterRow">
                <Col md={7} id="FooterIntro">
                    <h5 className="title">Volunteer Engineering Experience Program</h5>
                    <p>
                    The Volunteer Engineering Experience Program (VEEP) pairs local, community oriented organizations 
                    with student teams who have technical expertise to create a product that will 
                    improve our partner organizations’ impact on their community. 
                    </p>
                    <Row className="FooterButtons">
                        <Button className="FooterButton col-4" fullwidth="true" 
                            onClick={() =>(window.location.href = 'https://www.facebook.com/uoftveep')}>
                        <FacebookIcon className="FooterIcon"/>
                        </Button>
                        <Button className="FooterButton col-4" fullwidth="true" 
                            onClick={() =>(window.location.href = 'https://instagram.com/uoft_veep?utm_medium=copy_link')}>
                            <InstagramIcon className="FooterIcon"/>
                        </Button>
                        <Button className="FooterButton col-4" fullwidth="true" 
                        onClick={() =>(window.location.href = 'mailto:president@veep.skule.ca')}> 
                            <MailOutlineIcon className="FooterIcon"/>
                        </Button>
                    </Row>
                </Col>
                <Col md={5} id="FooterLinks">
                    <h5 className="title">Sitemap</h5>
                    <ListGroup variant="flush" id="FooterList">
                        <ListGroup.Item action href="/">Home</ListGroup.Item>
                        <ListGroup.Item action href="/projects">Projects</ListGroup.Item>
                        <ListGroup.Item action href="/events">Events</ListGroup.Item>
                        <ListGroup.Item action href="/about">About Us</ListGroup.Item>
                        <ListGroup.Item action href="/contact">Contact Us</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className="FooterRow">
                <p>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://veep.skule.ca"> University of Toronto Volunteer Engineering Experience Program </a>
                </p>
            </Row>
        </Container>
        
    )
  }
}

export default Footer;
