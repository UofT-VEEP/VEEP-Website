import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
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
        <NavBar></NavBar>
        <div class='card_list'>
            <div class ='card text-black bg-info' style={{ width: '18rem' }}>
              <Card.Img src="animu_logo.png" alt="Logo" />
              <Card.Body>
                <Card.Title><p class='title'>About me</p></Card.Title>
                <Card.Text>
                  <Container>
                    <p class='info_grid'>
                      <p class='attributeName redfont'>Name : </p>
                      <p class='attributeValue'>Binaru Appuhamy</p>
                    </p>
                    <p class='info_grid'>
                      <p class='attributeName'>Current year : </p>
                      <p class='attributeValue'>ECE PEY</p>
                    </p>
                    <p class='info_grid'>  
                      <p class='attributeName'>Hobbies : </p>
                      <p class='attributeValue'>Read manga and watch anime!</p>
                    </p>
                  </Container>
                </Card.Text>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>More Hobbies</Accordion.Header>
                    <Accordion.Body>
                      Nope nothin here.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </div>
            <div class ='card text-black bg-info' style={{ width: '18rem' }}>
              <Card.Img class = "circle_crop" src="animu_logo.png" alt="Logo" />
              <Card.Body>
                <Card.Title><p class='title'>About me</p></Card.Title>
                <Card.Text>
                  <Container>
                    <p class='info_grid'>
                      <p class='attributeName'>Name : </p>
                      <p class='attributeValue'>Binaru Appuhamy</p>
                    </p>
                    <p class='info_grid'>
                      <p class='attributeName'>Current year : </p>
                      <p class='attributeValue'>ECE PEY</p>
                    </p>
                    <p class='info_grid'>  
                      <p class='attributeName'>Hobbies : </p>
                      <p class='attributeValue'>Read manga and watch anime!</p>
                    </p>
                  </Container>
                </Card.Text>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>More Hobbies</Accordion.Header>
                    <Accordion.Body>
                      Nope nothin here.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </div>
        </div>
      </div>
    )
  }
}

export default HomePage;