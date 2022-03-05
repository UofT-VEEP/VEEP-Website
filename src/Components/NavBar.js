import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../Styles/NavBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar className='NavBar' bg="success" variant="dark">
          <Container>
          <Navbar.Brand href="#home"> UofT VEEP </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#projects"> Projects </Nav.Link>
            <Nav.Link href="#aboutUs"> About Us </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
