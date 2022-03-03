import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../Styles/NavBar.css';

class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" className="navBarStyle">
          <Container>
            <Navbar.Brand href="#home">UofT VEEP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#other">Link2</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;