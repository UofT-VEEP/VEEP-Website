import React from 'react';
import NavBar from './Components/NavBar';
import {Accordion, Card, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HomePage.css';
import './Styles/NavBar.css';


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
      {/* Week 1 Training
        <img src="https://i.ytimg.com/vi/Nlbc0RbVjM8/maxresdefault.jpg" alt="Snoopy" weight= "120" height= "130" ></img>
        <h1>This is Snoopy</h1>
        <p>Hi, I'm Snoopy.</p>*/}
        
      {/* Week 2 Training */}
        <NavBar/>
        <Container fluid>
          <Row>
            <Card className="Snoopy">
              <Card.Img id = "Snoopypic" variant="top" src="https://i.ytimg.com/vi/Nlbc0RbVjM8/maxresdefault.jpg" alt="Snoopy" />
              <Card.Body>
                <Card.Title id = "Snoopyname">This is Snoopy</Card.Title>
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
            <Card className = "Snoopy" id = "Snoopyhome">
              <Card.Img id = "homepic" variant = "top" src="https://pbs.twimg.com/media/BUhyQkPCcAAkFlZ.png"  alt = "snoopyhome"  />
              <Card.Body>
                <Card.Title id = "homename">Snoopy's Home</Card.Title>
                <Card.Text>
                  This is where Snoopy lives. Snoopy likes here very much.

                </Card.Text>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>:)</Accordion.Header>
                    <Accordion.Body>
                      Hello
                    </Accordion.Body>
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