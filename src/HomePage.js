import React from 'react';
import NavBar from './Components/NavBar'; 
import { Card, Accordion, Button, Toast } from 'react-bootstrap';
import './Styles/HomePage.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      showHC2Toast: false,
    };
    this.HC2Button = this.HC2Button.bind(this);
  }

  HC2Button(){
    const click = !this.state.showHC2Toast;
    this.setState({
      showHC2Toast: click,
    });
  }
  
  render() {
    return (
      <div>
        <NavBar/>
                
        {/************************* Card #01 **********************************/}
        <div className="leftcolumn">
          <Card className="HomeCard">
            <Card.Body>
              <Card.Img variant="top" src="KG01.png" alt="Kevin" className="Card_Img"/>
              <Card.Title className="Card_Title"><br/>Yuhao Guan</Card.Title>
              <Card.Subtitle className="Card_Subtitle">2nd Year ECE</Card.Subtitle>
              <Card.Text>
                My name is Kevin. I like mining.
              </Card.Text>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>View More</Accordion.Header>
                  <Accordion.Body>
                    I am a friend of Steve.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </Card.Body>
          </Card>
        </div>



        {/************************* Card #02 **********************************/}
        <div className="rightcolumn">
          <Card className="HomeCard">
            <Card.Body>
              <Card.Img variant="top" src="KG02.png" alt="Kevin Logo" className="Card_Img2"/>
              <Card.Title className="Card_Title"><br></br>KG LOGO</Card.Title>
              <Card.Subtitle className="Card_Subtitle">LOGO</Card.Subtitle>
              <Card.Text>
                I'm a logo.
              </Card.Text>

              <Button onClick={this.HC2Button} variant="success" size="lg">
                Whose logo?
              </Button>

              <Toast className="Toasts" show={this.state.showHC2Toast} onClose={this.HC2Button}>
                <Toast.Header>
                  <img src="KG03.jpg" className="Toasts_Img" alt="Kevin Logo"/>
                  <strong className="me-auto"> | KG </strong>
                  <small> just now </small>
                </Toast.Header>
                <Toast.Body> Mine :D </Toast.Body>
              </Toast>              

            </Card.Body>
          </Card> 
        </div>
      </div>
    )
  }
}

export default HomePage;
