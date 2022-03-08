import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home">UofT VEEP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;