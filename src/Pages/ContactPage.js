import React from 'react';
import { Container } from 'react-bootstrap';

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactPage/ContactForm';

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
        <NavBar />
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

              <h2 class="display-5">we are happy to help <span class="display-1">:)</span></h2>

              <div className="contactInfo">
                <img src="C001Email.svg" alt="Email-Logo" width="45" />
                <span>Email: ############@######</span>
              </div>

              <div className="contactInfo">
                <img src="C002WeChat.svg" alt="Wechat-Logo" width="45" />
                <span>Wechat ID: ############</span>
              </div>

              <div>
                <img className="imgmargin" src="C003Facebook.svg" alt="Facebook-Logo" width="50"></img>
                <span className="Padding" />
                <img className="imgmargin" src="C004Instgram.svg" alt="Instgram-Logo" width="50"></img>
              </div>

            </Container>
          </div>

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
                <ContactForm />
              </Card.Body>
            </Card>
          </div>
>>>>>>> deb0910 (Adjusted background image)
        </div>
>>>>>>> 0893659 (Contactpage update02)
      </div>
    )
  }
}

export default ContactPage;