import React from 'react';
import {Container} from 'react-bootstrap';

import NavBar from '../Components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          Contact us:
          Social media:
          email:

        </Container>
      </div>
    )
  }
}

export default ContactUs;