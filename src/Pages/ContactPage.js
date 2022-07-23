//! External Imports
import React from 'react';
import { Container, Card } from 'react-bootstrap';

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
        <NavBar />
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

          {/******CARD******/}
          <div className="contactCardLocation">
            <Card className="contactCard">
              <Card.Body>
                <ContactForm />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactPage;