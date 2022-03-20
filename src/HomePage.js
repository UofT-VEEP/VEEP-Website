import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Card, Accordion, Button, Toast } from 'react-bootstrap';
import Navbar from './Components/NavBar.js';
import './Styles/HomePage.css';

class HomePage extends React.Component {
  // Un-comment this for week 4 content 
   constructor(props){
     super(props);
     this.state = {
        buttonState: false
     }
     this.setButtonState = this.setButtonState.bind(this);
     
  }

  setButtonState() {
    const temp = this.state.buttonState;
    this.setState({
      buttonState: !temp
    })
  }  
  
  render() {
    return (
      <div>
        <div>
        <Navbar/>
        </div>
        {/* card 1 */}
        <Row xs="auto">
          <Col>
        <div className='separation'>
        <Card className='cardStyle'>
          <Card.Img className='imgStyle' variant="top" src="logo512.png" />
          <Card.Body>
            <Card.Title className='cardTitleStyle'>Justin Zhong's about page</Card.Title>
            <Card.Text className='cardTextStyle'>
              Hello, my name is Justin. I'm a 3rd year ECE student
            </Card.Text>
            <Button onClick={this.setButtonState} className="mb-2">Click me for more info</Button>
        <Toast show={this.state.buttonState} onClose={this.setButtonState}>
          <Toast.Header>
            <strong className="me-auto">More info</strong>
            <small>some more info</small>
          </Toast.Header>
          <Toast.Body>Javascript class is so weird</Toast.Body>
        </Toast>
          </Card.Body>
        </Card>

        </div>
        </Col>
        {/* card 2 */}
        <Col>
        <div className='separation'>
        <Card className='cardStyle'>
          <Card.Img className="circle" variant="top" src="dog.jpg"/>
          <Card.Body>
            <Card.Title className='cardTitleStyle'>Justin Zhong's about page</Card.Title>
            <Card.Text className='cardTextStyle'>
              Hello, my name is Justin. I'm a 3rd year ECE student
            </Card.Text>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>View More</Accordion.Header>
                <Accordion.Body>
                  The image is a random cute dog I found online.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
        </div>
        </Col>
        </Row>
      </div>
    )
  }
}

export default HomePage;