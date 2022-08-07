<<<<<<< HEAD
import React from 'react';
import { Container } from 'react-bootstrap';

=======
//! External Imports
import React from 'react';
import { Container, Card } from 'react-bootstrap';

//! Internal Item Imports
>>>>>>> a5191a2 (ContactUs UI UPdate02)
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactPage/ContactForm';

<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ContactPage.css';

=======
//! Internal Style Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ContactPage.css';


>>>>>>> a5191a2 (ContactUs UI UPdate02)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Container className="contactUs">
          <h1>Have any questions?</h1>
          <h2>Send us an email</h2>
          <ContactForm />
        </Container>
        <Footer />
=======
        {/******WORD******/}
        <div  className="background">
          <div className="contactWordLocation">
            <Container className="contactWord">
              <h1 class="display-3">Have any questions ?</h1>
=======
        <div className="CU_background">
>>>>>>> efd3fdc (ContactUs Update0809)
=======
        <div className="CU_background">
>>>>>>> a5191a2 (ContactUs UI UPdate02)

          {/***************************** CONTENT *****************************/}
          <div className="CU_row">
            {/******************** LEFT ********************/}
            <div className="CU_left">
              <p className="CU_left_p1">Have Any Questions ?</p>
              <p className="CU_left_p2">We are happy to help<span className="CU_left_p3">:)</span></p>
              
              <div className="CU_left_p4">
                <img src="C001EmailLight.svg" alt="Email-Logo" width="45" />
<<<<<<< HEAD
<<<<<<< HEAD
                <span>Email: president@veep.skule.ca</span>
=======
                <span>Email: ############@######</span>
>>>>>>> a5191a2 (ContactUs UI UPdate02)
=======
                <span>Email: president@veep.skule.ca</span>
>>>>>>> 7f3f05d (ContactUS update)
              </div>

              <div className="CU_left_p5">
                <img src="C002WeChatLight.svg" alt="Wechat-Logo" width="45" />
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
<<<<<<< HEAD
        {/******CARD******/}
        <div className="contactCardLocation">
          <Card className="contactCard">
            <Card.Body>
              <ContactForm />
            </Card.Body>
          </Card>

        </div>
<<<<<<< HEAD
>>>>>>> 004f5c2 (Contact Page New update)
=======
=======
          {/******CARD******/}
          <div className="contactCardLocation">
            <Card className="contactCard">
              <Card.Body>
=======
                <div className="CU_left_p6_right">
                  <p className="CU_left_p6_right_p1">Facebook</p>
                  <p className="CU_left_p6_right_p2">VEEP - Volunteer Engineering Experience Program</p>
                </div>
=======
                <span>Wechat ID: ############</span>
=======
                <span>Wechat (UofT VEEP): gh_aede419c3c5e</span>
>>>>>>> 7f3f05d (ContactUS update)
              </div>

              <div className="CU_left_p6">
                <a href="https://www.facebook.com/uoftveep/" target="_blank">
                  <img src="C003Facebook.svg" alt="Facebook-Logo" width="50" />
                </a>
                <span />
<<<<<<< HEAD
                <img src="C004Instgram.svg" alt="Instgram-Logo" width="50" />
>>>>>>> a5191a2 (ContactUs UI UPdate02)
=======
                <a href="https://instagram.com/uoft_veep" target="_blank">
                  <img src="C004Instgram.svg" alt="Instgram-Logo" width="50" />
                </a>
>>>>>>> 7f3f05d (ContactUS update)
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
<<<<<<< HEAD
<<<<<<< HEAD
                  <a href="https://instagram.com/uoft_veep">
                    <img src="C004InstgramLight.svg" alt="Instgram-Logo" width="50" />
                  </a>
                  <span />
                  <a href="https://www.facebook.com/uoftveep/">
                    <img src="C003FacebookLight.svg" alt="Facebook-Logo" width="50" />
                  </a>
=======
                  <img src="C003FacebookLight.svg" alt="Facebook-Logo" width="50" />
                  <span />
                  <img src="C004InstgramLight.svg" alt="Instgram-Logo" width="50" />
>>>>>>> a5191a2 (ContactUs UI UPdate02)
=======
                  <a href="https://www.facebook.com/uoftveep/">
                    <img src="C003FacebookLight.svg" alt="Facebook-Logo" width="50" />
                  </a>
                  <span />
                  <a href="https://instagram.com/uoft_veep">
                    <img src="C004InstgramLight.svg" alt="Instgram-Logo" width="50" />
                  </a>
>>>>>>> 7f3f05d (ContactUS update)
                </div>
              </div>
            </div>

            {/******************** RIGHT ********************/}
            <div className="CU_right">
              <Card className="CU_right_card">
<<<<<<< HEAD
>>>>>>> efd3fdc (ContactUs Update0809)
=======
>>>>>>> a5191a2 (ContactUs UI UPdate02)
                <ContactForm />
              </Card>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> deb0910 (Adjusted background image)
=======
=======
>>>>>>> a5191a2 (ContactUs UI UPdate02)

          {/*************** PHONE BOTTOM ***************/}
          <div className="CU_phone_bottom">
            <div className="CU_phone_bottom_p1">
              <img src="C001Email.svg" alt="Email-Logo" width="45" />
<<<<<<< HEAD
<<<<<<< HEAD
              <span>Email: president@veep.skule.ca</span>
=======
              <span>Email: ############@######</span>
>>>>>>> a5191a2 (ContactUs UI UPdate02)
=======
              <span>Email: president@veep.skule.ca</span>
>>>>>>> 7f3f05d (ContactUS update)
            </div>
            
            <div className="CU_phone_bottom_p2">
              <img src="C002WeChat.svg" alt="Wechat-Logo" width="45" />
<<<<<<< HEAD
<<<<<<< HEAD
              <span>Wechat Official Account: UofT VEEP</span>
=======
              <span>Wechat ID: ############</span>
>>>>>>> a5191a2 (ContactUs UI UPdate02)
=======
              <span>Wechat (UofT VEEP): gh_aede419c3c5e</span>
>>>>>>> 7f3f05d (ContactUS update)
            </div>
          </div>

          {/***************************** FOOTER *****************************/}
          <hr className='CU_footer'/>
          <Footer />
<<<<<<< HEAD
>>>>>>> efd3fdc (ContactUs Update0809)
        </div>
>>>>>>> 0893659 (Contactpage update02)
=======
        </div>
>>>>>>> a5191a2 (ContactUs UI UPdate02)
      </div>
    )
  }
}

export default ContactPage;