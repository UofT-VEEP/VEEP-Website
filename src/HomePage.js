import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Navbar, Nav, Accordion } from 'react-bootstrap';

class HomePage extends React.Component {
  // Un-comment this for week 4 content 
  // constructor(props){
  //   super(props);

  //   this.state = {}
  // }
  
  render() {
    document.title = "VEEP";
    return (
      <Container fluid>
        <Navbar bg="dark" expand="lg" variant = "dark">
          <Container>
            <Navbar.Brand href="#home">U of T VEEP</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#About Us">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Card border = "dark" style={{ width: '20rem'}}>
          <Card.Body>
            <Card.Img variant = "top" src = "logo192.png" alt = "logo"/>
            <Card.Title>Yicheng Wei</Card.Title>
            <Card.Text>
              ECE 2T2 + PEY <br/>
              Hi I'm Yicheng, I Love playing ukulele and guitar
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header> View More </Accordion.Header>
                <Accordion.Body>
                  I also have a cute cat
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>  
        </Card>
      </Container>
        
      
    )
  }
}

export default HomePage;