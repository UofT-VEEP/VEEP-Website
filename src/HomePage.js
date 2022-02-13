import React from 'react';
import { Card, Accordion, Navbar, Nav, Container } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
  // Un-comment this for week 4 content 
  // constructor(props){
  //   super(props);

  //   this.state = {}
  // }
  
  render() {
    return (
      <div>
        <Navbar bg="success" variant="dark">
          <Container>
          <Navbar.Brand href="#home">UofT VEEP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        <br/>

        <Card border="success" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="KG01.png" alt="Kevin" width="286" height="161" />
          <Card.Body>
            <Card.Title>Yuhao Guan</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2nd Year ECE</Card.Subtitle>
            <Card.Text>
              My name is Kevin. I like mining.
            </Card.Text>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>View More</Accordion.Header>
                <Accordion.Body>
                  I am a friend of Steve.
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