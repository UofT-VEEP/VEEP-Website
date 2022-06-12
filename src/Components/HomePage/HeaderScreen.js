import React from 'react';

import { Container, Button, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HeaderScreen.css';

import TitleBox from './TitleBox';

import BannerLogo from '../../imgs/logos/white.png';

import CardFlipProjects from './flip_card';

class HeaderScreen extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        
      }
    }
    
    render() {
      return (
        <div>
          <Container fluid className='HeaderScreenBox'>
            <Row>
              <Col sm={12} md={4} className="headerLeft">
                <Row className="justify-content-center"> 
                  <img src={BannerLogo} alt="VEEP Logo" id="MediumBannerLogo"/>
                </Row>
                <Row className="SocialButtonContainer">
                  <Button className="SocialButton col-4" fullwidth="true" variant="dark"
                      onClick={() =>(window.location.href = 'https://www.facebook.com/uoftveep')}>
                  <FacebookIcon className="IconButton"/>
                  </Button>
                  <Button className="SocialButton col-4" fullwidth="true" variant="dark"
                      onClick={() =>(window.location.href = 'https://instagram.com/uoft_veep?utm_medium=copy_link')}>
                      <InstagramIcon className="IconButton"/>
                  </Button>
                  <Button className="SocialButton col-4" fullwidth="true" variant="dark"
                  onClick={() =>(window.location.href = 'mailto:utveep@gmail.com')}> 
                      <MailOutlineIcon className="IconButton"/>
                  </Button>
                </Row>
                <Row>
                  <TitleBox />
                </Row>
              </Col>
              <Col sm={12} md={8}>
                <Row className="CarouselContainer">
                  <CardFlipProjects />
                </Row>
              </Col>
            </Row>
          </Container> 
        </div>
      )
    }
  }
  
export default HeaderScreen;