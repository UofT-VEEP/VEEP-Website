import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './Styles/NavBar.css';
import './Styles/HomePage.css';

class HomePage extends React.Component {

  // Un-comment this for week 4 content 
  // constructor(props){
  //   super(props);

  //   this.state = {}
  // }
  
  render() {
    return (
        
      <div>
        <NavBar/>
        <Container fluid>
          <Row>
          <Card id="Introduction">
          <Card.Img id="Uoft_logo" variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/500px-Utoronto_coa.svg.png"/>
            <Card.Body>
              <Card.Title id="Name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bella Huang</Card.Title>
              <Card.Text>
                <div>
                  <p>
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

          <Card id="New">
            <Card.Img id="Uoft_logo2" variant="top" src="data:image/png;base64,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"/>
              <Card.Body>
                <Card.Text>
                  <div>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;<b>VEEP</b><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Student Club<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;VEEP is Volunteer Engineering Experience Program<br />
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
          </Row>
          </Container>
        
      </div>
    )
  }
}

export default HomePage;