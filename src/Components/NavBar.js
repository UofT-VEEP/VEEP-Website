import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/NavBar.css';

import {Container, Navbar, Nav} from 'react-bootstrap';

import logo from '../imgs/logos/small.png';

class NavBar extends React.Component {
  
  render() {
    return (
        <Navbar sticky="top" className="row-0 NavBar" variant='dark'>
          <Container fluid>
            <Navbar.Brand className="col-4 NavLogo" href="/">
              <img src={logo} className="d-inline-block align-top" alt="VEEP Logo" />
            </Navbar.Brand>
            <Nav pullRight className="NavLinks">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/projects">PROJECTS</Nav.Link>
              <Nav.Link href="/events">EVENTS</Nav.Link>
              <Nav.Link href="/teams">TEAMS</Nav.Link>
              <Nav.Link href="/contact">CONTACT US</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
  }
}

export default NavBar;
