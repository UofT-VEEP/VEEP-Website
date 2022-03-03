import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Card, Accordion } from 'react-bootstrap';
import Navbar from './Components/NavBar.js';
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