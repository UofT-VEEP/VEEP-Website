import React from 'react';
import { Container, Row, Col, ToggleButton, ToggleButtonGroup, Card } from 'react-bootstrap';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import HorizontalNonLinearStepper from './Timeline'
import TextMobileStepper from './TimelineMobile'
import HeaderScreen from './HeaderScreenv2';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/MainContent.css';

function detectMob() {
    console.log(window.innerWidth);
    return (window.innerWidth <= 800);
}

class MainContent extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
          role: 0, //role 0 -> student , 1 -> client
          activeStep: 0,
          rolelist: ['Students', 'Clients'],
          roleDataList: [
            {
                Steps: [ "Choose Project", "Apply", "Establish Team", "Begin Work", "Mid-Year Design Review", "Year-End Showcase"],
                Important_Dates: ["August-Spetember", "September", "Early October", "October", "January", "March"],
                Important_Desc: [
                                    "Project opportunities will be posted on the website and all social media accounts! Read up and see which ones would be the best fit for your goals.",
                                    "Once you have decided which projects you are interested in, you will be invited to fill out an online application where you can list your top three choices. Following a round of CV and response screening, you will be invited to (virtual) face-to-face interview so we can best determine which project and role you fit into best.",
                                    "Congratulations - You are now officially a part of a VEEP Project! This step is crucial, as you will meet your team members, clients, technical project managers and any other third parties involved, setting the mood for the rest of the year to come. It's also at this stage where there will be a series of introductory events to get you on the ground running, and to set out team goals and expectations.",
                                    "At this point, you should have an idea of overall project trajectory, be familiar with what tools you are using (not necessarily how to use them - that may come later!), and have immediate action items from your project manager. Let the fun begin!",
                                    "This is a valuable mid year event that serves the purpose of a heat check, opportunity for external input, and for the first chance to show off your work to a larger audience. Each team will be responsible for giving a quick ~20 minute demo / presentation of what they've accomplished and future plans.",
                                    "Congratulations! You've made it! You've successfully completed a VEEP project and now have the opportunity to show it off to the world. The format this year is currently undecided, but will consist of a ~30 minute presentation of the product, as well as your growth as a team and professional individuals"
                                ],
              },
              {
                Steps: [ "Meet with Business Development Team", "Receive Our Decision", "Meet with the Technical team", "Mid-Year Design Review", "Year-End Showcase"],
                Important_Dates: ["May-July", "August", "Early October", "January", "April"],
                Important_Desc: [
                                    "During these months, our business development team will reach out to you or you could reach out to our team. The team will set up a meeting with you to discuss what project you would like us to do.",
                                    "After the meeting(s), our team will evaluate all the projects, decide which project(s) would be the best fit for our students, and inform you of the final decision.",
                                    "Congratulations - Your project is picked! The technical manager will set up a meeting with you to go over the details of the project, the team's goals and expectations. After the meeting, the team will start working on your project. During the next 6-8 months, the team will set up several progress report meetings with you to update their progress and ask questions.",
                                    "This is a valuable mid-year event where your team will give a quick ~20-minute demo/presentation of what they have accomplished and future plans. You are more than welcome to attend this event and give your feedback.",
                                    "This is a major event where your team will give a ~30-minute presentation of the final product as well as their growth as a team and professional individuals. You are more than welcome to attend this event and give your feedback."
                                ],
              }
          ]
      }
    }
    
    setActiveStep = (index) => {
        this.setState({activeStep: index})
    }

    render() {
        const FadeUp = batch(Fade(), MoveIn(), Sticky());
        const FadeUpStay = batch(FadeIn(), MoveIn(), Sticky(50, 31));

        return (
            <Container fluid className='contentContainer'>
                <ScrollContainer> 
                    <ScrollPage page={0}>
                        <Animator animation={FadeUp}>
                            <HeaderScreen /> 
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1}>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <Animator animation={FadeUp}>
                            <Row>
                                <Col>
                                    <Card className="projectTypeCard">
                                        <Card.Body>
                                            <Card.Title>Photos/Video</Card.Title>
                                            <Card.Text>
                                                Insert photos/videos when they are available
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="projectTypeCard">
                                        <Card.Body>
                                            <Card.Title>Our Program</Card.Title>
                                            <Card.Text>
                                                <li> content 1</li>
                                                <li> content 2</li>
                                                <li> content 3</li> 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="projectTypeCard">
                                        <Card.Body>
                                            <Card.Title>On Campus</Card.Title>
                                            <Card.Text>
                                                <li> content 1</li>
                                                <li> content 2</li>
                                                <li> content 3</li> 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="projectTypeCard">
                                        <Card.Body>
                                            <Card.Title>Community</Card.Title>

                                            <Card.Text>
                                                <li> content 1</li>
                                                <li> content 2</li>
                                                <li> content 3</li> 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={3}>
                    </ScrollPage>
                    <ScrollPage  page={4}>
                        <Animator  animation={FadeUpStay}>
                        <Card text="dark" className="timelineContainer">
                                <Card.Body>
                                    <Card.Title>Roles</Card.Title>
                                    <Row>
                                        <ToggleButtonGroup type="radio" name="options">
                                            {this.state.rolelist.map((role, idx) => (
                                                <Col>
                                                    <ToggleButton
                                                        key={idx}
                                                        id={`radio-${idx}`}
                                                        type="radio"
                                                        variant="outline-dark"
                                                        name="radio"
                                                        value={role}
                                                        checked={this.state.rolelist[this.state.role] === this.state.rolelist[idx]}
                                                        onClick={(event) => this.setState({
                                                                                            role: this.state.rolelist.indexOf(event.currentTarget.textContent),
                                                                                            activeStep: 0
                                                                                            })}
                                                        className={this.state.rolelist[this.state.role] === this.state.rolelist[idx] ? "timelineButton-active" : "timelineButton-inactive"}
                                                    >
                                                        {role}
                                                    </ToggleButton>
                                                </Col>
                                            ))}
                                        </ToggleButtonGroup>
                                    </Row>
                                    <Row className="timelineRow">
                                        {detectMob() ? 
                                            ( 
                                                <TextMobileStepper 
                                                    setActiveStep={this.setActiveStep.bind(this)} 
                                                    activeStep={this.state.activeStep} 
                                                    data={this.state.roleDataList[this.state.role]}
                                                />
                                            ) : 
                                            ( 
                                                <HorizontalNonLinearStepper 
                                                    setActiveStep={this.setActiveStep.bind(this)} 
                                                    activeStep={this.state.activeStep} 
                                                    data={this.state.roleDataList[this.state.role]}
                                                />
                                            )
                                        }
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </Container>
        )
    }
  }
  
export default MainContent;