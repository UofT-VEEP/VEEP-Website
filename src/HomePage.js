import React from 'react';

import { Card } from 'react-bootstrap';
import { DropdownButton} from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return (
        
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Card>
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
                <DropdownButton id="dropdown-item-button" title="View More">
                <Dropdown.Item as="button">I love coding!</Dropdown.Item>
               </DropdownButton>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HomePage;