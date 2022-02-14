import React from 'react';
import {Accordion, Card, Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
  
  render() {
    return (
      <div>
      {/* Week 1 Training */}
        <img src="https://i.ytimg.com/vi/Nlbc0RbVjM8/maxresdefault.jpg" alt="Snoopy" weight= "120" height= "130" ></img>
        <h1>This is Snoopy</h1>
        <p>Hi, I'm Snoopy.</p>   
        
      {/* Week 2 Training
        <Navbar bg="primary" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Snoopy Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing">About Snoopy</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.ytimg.com/vi/Nlbc0RbVjM8/maxresdefault.jpg" alt="Snoopy" weight= "120" height= "130" />
          <Card.Body>
            <Card.Title>This is Snoopy</Card.Title>
            <Card.Text>
              Hello, I'm Snoopy. Nice to meet you.
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Hobby</Accordion.Header>
                <Accordion.Body>
                 Eating ice cream 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card> 
      */}
      </div>
    )
  }
}

export default HomePage;