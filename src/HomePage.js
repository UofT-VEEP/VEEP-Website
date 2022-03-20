import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HomePage.css';
import NavBar from './Components/NavBar';
import {Card, Accordion, Container, Button, Toast} from 'react-bootstrap';

class HomePage extends React.Component {
  // Un-comment this for week 4 content
  constructor(props){
    super(props);
    this.state = {
      show : true
    }
    this.toggleshow = () => this.setState({show : !this.state.show})
  }
  
  render() {
    return (
      <div>
        <NavBar/>
        <div className='card_list'>
            <div className='card text-black bg-info' style={{ width: '18rem' }}>
              <Card.Img src="animu_logo.png" alt="Logo" />
              <Card.Body>
                <Card.Title><p className='card_title'>About me</p></Card.Title>
                <Card.Text>
                  <Container>
                    <p className='card_info_grid'>
                      <p className='card_attribute_name red_font'>Name : </p>
                      <p className='card_attribute_value'>Binaru Appuhamy</p>
                    </p>
                    <p className='card_info_grid'>
                      <p className='card_attribute_name'>Current year : </p>
                      <p className='card_attribute_value'>ECE PEY</p>
                    </p>
                    <p className='card_info_grid'>  
                      <p className='card_attribute_name'>Hobbies : </p>
                      <p className='card_attribute_value'>Read manga and watch anime!</p>
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
            <div className ='card text-black bg-info' style={{ width: '18rem' }}>
              <Card.Img className="circle_crop" src="animu_logo.png" alt="Logo" />
              <Card.Body>
                <Card.Title><p className='card_title'>About me</p></Card.Title>
                <Card.Text>
                  <Container>
                    <p className='card_info_grid'>
                      <p className='card_attribute_name'>Name : </p>
                      <p className='card_attribute_value'>Binaru Appuhamy</p>
                    </p>
                    <p className='card_info_grid'>
                      <p className='card_attribute_name'>Current year : </p>
                      <p className='card_attribute_value'>ECE PEY</p>
                    </p>
                    <p className='card_info_grid'>  
                      <p className='card_attribute_name'>Hobbies : </p>
                      <p className='card_attribute_value'>Read manga and watch anime!</p>
                    </p>
                  </Container>
                </Card.Text>
                <Button onClick={this.toggleshow} className="mb-2">
                  Click me
                </Button>
                <Toast show={this.state.show} onClose={this.toggleshow}>
                  <Toast.Header>
                    <img className= "image_minify" src="animu_logo.png" alt="Logo"/>
                    <strong className="me-auto">Binaru</strong>       
                    <small>Just now</small>
                  </Toast.Header>
                  <Toast.Body>Wow you are reading this</Toast.Body>
                </Toast>
              </Card.Body>
            </div>
        </div>
      </div>
    )
  }
}

export default HomePage;