import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../Styles/NavBar.css'

class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar bg = "dark" variant = "dark">
          <Container>
            <Navbar.Brand href="#home">U of T VEEP</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#About Us">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;