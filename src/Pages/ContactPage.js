import React from 'react';
import { Container } from 'react-bootstrap';

import NavBar from '../Components/Navbar';
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
        <Container className="contactUs">
          <h1>Have any questions?</h1>
          <h2>Send us an email</h2>
          <ContactForm />
        </Container>
      </div>
    )
  }
}

export default ContactPage;