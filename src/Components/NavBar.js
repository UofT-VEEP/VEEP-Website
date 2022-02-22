import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand >UofT Veep</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Projects</Nav.Link>
              <Nav.Link >About Us</Nav.Link>
            </Nav>
          </Container>   
        </Navbar>
      </div>
    )
  }
}

export default NavBar;