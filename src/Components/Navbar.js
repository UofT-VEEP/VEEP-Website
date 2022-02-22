import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/NavBar.css';

import {Navbar, Nav} from 'react-bootstrap';

import logo from '../imgs/logos/small.png';

class NavBar extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar sticky="top" className="row NavBar">
            <Navbar.Brand className="col-4 NavLogo" href="/">
                <img src={logo} className="d-inline-block align-top" alt="VEEP Logo" />
            </Navbar.Brand>
            <Nav className="col-8 justify-content-end NavLinks">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/projects">PROJECTS</Nav.Link>
                <Nav.Link href="/events">EVENTS</Nav.Link>
                <Nav.Link href="/teams">TEAMS</Nav.Link>
                <Nav.Link href="/contact">CONTACT US</Nav.Link>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;