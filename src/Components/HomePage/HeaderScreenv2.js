import React from 'react';

import {Button, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HeaderScreen.css';
import BannerLogo from '../../imgs/logos/banner_logo_no_border.png';
import CardFlipProjects from './flip_card';
import { detectMob } from '../../HomePage';

class HeaderScreen extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        
      }
    }
    
    render() {
      return (
            <Row className='HeaderScreenBox'>
              <Col sm={12} md={4} className="headerLeft">
                  <Row className="justify-content-center BannerLogoContainer">
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
                  onClick={() =>(window.location.href = 'mailto:president@veep.skule.ca')}> 
                      <MailOutlineIcon className="IconButton"/>
                  </Button>
                </Row>
              </Col>
              {detectMob() ?
                (
                  <Row className="ProjectButtonMobContainer">
                    <Button className="ProjectButtonMob" variant='dark' onClick={() =>(window.location.href = "/projects")}>
                      Go to Projects
                      <KeyboardArrowRightIcon />
                    </Button>
                  </Row>
                ):
                ( 
                  <Col sm={12} md={8}>
                    <Row className="CarouselContainer">
                      <CardFlipProjects />
                    </Row>
                  </Col>
                )
              }
            </Row>
      )
    }
  }
  
export default HeaderScreen;