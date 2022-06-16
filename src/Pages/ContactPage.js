//! External Imports
import React from 'react';
import { Container, Card } from 'react-bootstrap';

//! Internal Item Imports
import NavBar from '../Components/NavBar';
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
        <div class="bg-dark"></div>
        {/******WORD******/}
        <div className="contactWordLocation">
          <container className="contactWord">
            <h1 class="display-3">Have any questions ?</h1>
            <br></br>
            <h2 class="display-5">we are happy to help <span class="display-1">:)</span></h2>


            <br></br>
            <br></br>
            <br></br>

            <img src="C001Email.svg" alt="Email-Logo" width="45"></img>
            <span className="contactInfo">Email: ############@######</span>


            <br></br>
            <br></br>
            <br></br>

            <img src="C002WeChat.svg" alt="Wechat-Logo" width="45"></img>
            <span className="contactInfo">Wechat ID: ############</span>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img className="imgmargin" src="C003Facebook.svg" alt="Facebook-Logo" width="50"></img>
            <span className="Padding"></span>
            <img className="imgmargin" src="C004Instgram.svg" alt="Instgram-Logo" width="50"></img>

          </container>
        </div>

        {/******CARD******/}
        <div className="contactCardLocation">
          <Card className="contactCard">
            <Card.Body>
              <ContactForm />
            </Card.Body>
          </Card>

          <br></br>


        </div>
      </div>
    )
  }
}

export default ContactPage;