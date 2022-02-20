import React from 'react';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

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
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand >UofT Veep</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Projects</Nav.Link>
              <Nav.Link >About Us</Nav.Link>
            </Nav>
          </Container>   
        </Navbar>
        <div>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src="uoft_logo.jpg" alt="UofT Logo" />
              <Card.Body>
                <Card.Title><b><u>About me</u></b></Card.Title>
                <Card.Text>
                  <Container>
                    <b>Name :</b> Binaru Appuhamy<br />
                    <b>Current year :</b> ECE PEY<br />
                    <b>Hobbies :</b> Read manga and watch anime!<br />
                  </Container>
                </Card.Text>
                  <DropdownButton id="dropdown-basic-button" title="More Hobbies">
                    <Dropdown.Item href="more_hobbies.gif" >Click here to get admin permission to view this information.</Dropdown.Item>
                  </DropdownButton>
              </Card.Body>
            </Card>
        </div>
      </div>
    )
  }
}

export default HomePage;