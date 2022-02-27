import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Accordion, Navbar, Nav, Container } from 'react-bootstrap';

class HomePage extends React.Component {
  // Un-comment this for week 4 content 
  // constructor(props){
  //   super(props);

  //   this.state = {}
  // }
  
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <Container>
            <Navbar.Brand href="#home">UofT VEEP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#other">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="logo512.png" />
          <Card.Body>
            <Card.Title>Justin Zhong's about page</Card.Title>
            <Card.Text>
              Hello, my name is Justin. I'm a 3rd year ECE student
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>View More</Accordion.Header>
                <Accordion.Body>
                  Not gonna let you know more about me :D
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HomePage;