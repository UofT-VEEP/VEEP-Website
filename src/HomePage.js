import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class HomePage extends React.Component {
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

        <Card style={{ width: '25rem'}}>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/500px-Utoronto_coa.svg.png"
                   width="350" height = "300"/>
            <Card.Body>
              <Card.Text>
                <div>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;<b>Bella Huang</b><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;ECE2T4<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Technical Member at VEEP<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Hi, my name is Bella and I love coding!<br />
                  </p>
                </div>
              </Card.Text>
               <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>View More</Accordion.Header>
                  <Accordion.Body>I also like reading and playing piano!</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HomePage;