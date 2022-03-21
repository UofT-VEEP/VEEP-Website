import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap';

class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar id = "topnav" bg="primary" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Snoopy Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing">About Snoopy</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;