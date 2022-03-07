import React from 'react';

import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class HomePage extends React.Component {
  
  render() {
    return (
      <div> 
        <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Uoft VEEP</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </div>
    
        <Card>
            <Card.Body>
              <Card.Img src="https://www.pngitem.com/pimgs/m/470-4702809_transparent-spirited-away-png-cute-spirited-away-no.png"
              width="400" height = "400"/>
              <h2>Bella Huang</h2>
              <h4>Technical Member at VEEP</h4>
              <h4>Intdroduction:</h4>
              <p>Hi, my name is Bella and I am currently
             in my second year of studies of Computer Engineering 
              at UofT! 
              </p>
              <DropdownButton title="View More">
                <Dropdown.Item>Looking forward to working and getting to know everyone! :)</Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Card>

      </div>
    )
  }
}

export default HomePage;