//! External Imports
import React from 'react';
import { Card } from 'react-bootstrap';

//! Internal Item Imports
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactPage/ContactForm';

//! Internal Style Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ContactPage.css';


class ContactPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <NavBar />
        <div className="CU_background">

          {/***************************** CONTENT *****************************/}
          <div className="CU_row">
            {/******************** LEFT ********************/}
            <div className="CU_left">
              <p className="CU_left_p1">Have Any Questions ?</p>
              <p className="CU_left_p2">We are happy to help<span className="CU_left_p3">:)</span></p>
              
              <div className="CU_left_p4">
                <img src="C001EmailLight.svg" alt="Email-Logo" width="45" />
                <span>Email: president@veep.skule.ca</span>
              </div>

              <div className="CU_left_p5">
                <img src="C002WechatLight.svg" alt="Wechat-Logo" width="45" />
                <span>Wechat Official Account: UofT VEEP</span>
              </div>

              <div className="CU_left_p6">
                <div className="CU_left_p6_left">
                  <a href="https://instagram.com/uoft_veep" target="_blank" rel="noreferrer">
                    <img src="C004Instgram.svg" alt="Instgram-Logo" width="50" />
                  </a>
                </div>

                <div className="CU_left_p6_right">
                  <p className="CU_left_p6_right_p1">Instgram</p>
                  <p className="CU_left_p6_right_p2">uoft_veep</p>
                </div>
              </div>

              <div className="CU_left_p7">
                <div className="CU_left_p6_left">
                  <a href="https://www.facebook.com/uoftveep/" target="_blank" rel="noreferrer">
                    <img src="C003Facebook.svg" alt="Facebook-Logo" width="50" />
                  </a>
                </div>

                <div className="CU_left_p6_right">
                  <p className="CU_left_p6_right_p1">Facebook</p>
                  <p className="CU_left_p6_right_p2">VEEP - Volunteer Engineering Experience Program</p>
                </div>
              </div>
            </div>

            {/*************** PHONE TOP ***************/}
            <div className="CU_phone_top">
              <div className="CU_row">
                <div className="CU_phone_top_left">
                  <p className="CU_left_p1">Have Any Questions ?</p>
                  <p className="CU_left_p2">We are happy to help<span className="CU_left_p3">:)</span></p>
                </div>

                <div className="CU_phone_top_right">
                  <a href="https://instagram.com/uoft_veep">
                    <img src="C004InstgramLight.svg" alt="Instgram-Logo" width="50" />
                  </a>
                  <span />
                  <a href="https://www.facebook.com/uoftveep/">
                    <img src="C003FacebookLight.svg" alt="Facebook-Logo" width="50" />
                  </a>
                </div>
              </div>
            </div>

            {/******************** RIGHT ********************/}
            <div className="CU_right">
              <Card className="CU_right_card">
                <ContactForm />
              </Card>
            </div>
          </div>

          {/*************** PHONE BOTTOM ***************/}
          <div className="CU_phone_bottom">
            <div className="CU_phone_bottom_p1">
              <img src="C001Email.svg" alt="Email-Logo" width="45" />
              <span>Email: president@veep.skule.ca</span>
            </div>
            
            <div className="CU_phone_bottom_p2">
              <img src="C002Wechat.svg" alt="Wechat-Logo" width="45" />
              <span>Wechat Official Account: UofT VEEP</span>
            </div>
          </div>

          {/***************************** FOOTER *****************************/}
          <hr className='CU_footer'/>
          <Footer />
        </div>
      </div>
    )
  }
}

export default ContactPage;