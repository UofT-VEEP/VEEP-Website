import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card, Container, Accordion, Toast } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import './Styles/HomePage.css'

class HomePage extends React.Component {
  // Un-comment this for week 4 content

  constructor(props){
    super(props);

    this.state = {
      showToast : false
    };

    this.toggleShowToast = this.toggleShowToast.bind(this);

  }

  toggleShowToast(){
    if(this.state.showToast == true){
      this.setState({
        showToast : false
      });
    }
    else{
      this.setState({
        showToast : true
      });
    }
    
  }


  
  render() {
    document.title = "VEEP";
    return (
      
      <div>
        <NavBar/>
      <Container fluid>
        <Row xs="auto">
          <Col>
          <Card className = "CardStyle">
          <Card.Body>
            <Card.Img variant = "top" src = "card1.jpeg" alt = "uku"/>
            <Card.Title>
              <h1 className = "CardTitle">
                Yicheng Wei
              </h1>
            </Card.Title>
            <Card.Text>
              <p className = "MainParagraph">
                ECE 2T2 + PEY <br/>
                Hi I'm Yicheng, I Love playing ukulele
              </p>
            </Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header> View More </Accordion.Header>
                <Accordion.Body>
                  and guitar
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>  
        </Card>
          </Col>

          <Col>
          <Card className = "CardStyle">
          <Card.Body>
            <Card.Img id = "RoundImage" variant = "top" src = "cat.jpeg" alt = "cat"/>
            <Card.Title>
              <h1 className = "CardTitle">
                Coco
              </h1>
            </Card.Title>
            <Card.Text>
              <p className = "MainParagraph">
                Hi, my name is Coco <br/>
                I'm Yicheng's cat
              </p>
            </Card.Text>
            <Button variant = "info" size = "lg" className = "ButtonStyle" onClick = {this.toggleShowToast}> Show Message </Button>
            <Toast className = "ToastStyle" show = {this.state.showToast} onClose = {this.toggleShowToast}>
              <Toast.Header>
                <img src="logo192.png" id = "ToastImage" alt="toast" />
                <strong className = "me-auto">Coco</strong>
                <small>2 mins ago</small>
              </Toast.Header>
              <Toast.Body>Do you like me?</Toast.Body>
            </Toast>
          </Card.Body>
        </Card>
          </Col>
        </Row>
        

        
        
      </Container>
        
      </div>
      
    )
  }
}

export default HomePage;