import React from 'react';

import { Container, Row, Col, Button, Tabs, Tab, Card } from 'react-bootstrap';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import HorizontalNonLinearStepper from './Timeline'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/MainContent.css';

class MainContent extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
          isStudent: true,
          Student: {
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
          Client: {
            Steps: [ "temp"],
            Important_Dates: ["nothing here yet"],
            Important_Desc: ["nope not yet"],
          }
      }
    }
    
    render() {
      return (
        <div>
            {/* <Container className="contentContainer introTabs">
                <Tabs fill justify defaultActiveKey="AboutUs">
                    <Tab eventKey="AboutUs" title="About Us">
                        The Volunteer Engineering Experience Program (VEEP) is an undergraduate club based 
                        at the University of Toronto that pairs local, 
                        community oriented organizations with student teams 
                        who have technical expertise to create a product 
                        that will improve our partner organizations’ impact on their community. 
                        Through the process, students develop industry skills not taught in school 
                        and participate in a culture of using engineering for social and humanitarian wellness.
                    </Tab>
                    <Tab eventKey="OurPurpose" title="Our Purpose">
                        Our purpose is twofold - 
                        facilitate impact in social contexts through public good oriented projects 
                        hosted for technically adept students. 
                        It begins with a catch 22 scenario of students everywhere while looking for internships. 
                        Employers require that students have prior experience so it feels impossible to get a foot in the door. 
                        VEEP addresses this gap by hosting and supporting industry level projects 
                        to get students the skill and experience they need. 
                        Secondly, we empower students to serve their communities with their technical abilities and by extension, 
                        learn more about the needs of the communities around them. 
                        Our students learn to showcase their experience in nuanced projects where many stakeholders are involved.
                    </Tab>
                    <Tab eventKey="OurProgram" title="Our Program">
                        Our project cycle takes course over a 6-8 month period, 
                        beginning in September of the fall semester until April of the Winter semester. 
                        Students work in teams of 4-6 with a project manager on a weekly basis on their project. 
                        While they communicate with their client, they have the full support of VEEP to complete the project. 
                        At the end of the year, students showcase their work at an end-of-year event for clients and students alike.
                    </Tab>
                </Tabs>
            </Container>
            <Container className="contentContainer projectType">
                <h2>Project Types</h2>
                <Row>
                    <Col>
                        <Card className="projectTypeCard">
                            <Card.Body>
                                <Card.Title>Community</Card.Title>
                                <Card.Text>
                                    Work with local NFPs to address needs within the local Toronto Community.
                                </Card.Text>
                                <Button variant="link" href="/projects">VIEW PROJECTS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="projectTypeCard">
                            <Card.Body>
                                <Card.Title>Campus Clubs</Card.Title>
                                <Card.Text>
                                    Work with campus clubs to address needs specific to the UofT community. 
                                </Card.Text>
                                <Button variant="link" href="/projects">VIEW PROJECTS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="projectTypeCard">
                            <Card.Body>
                                <Card.Title>Startups</Card.Title>
                                <Card.Text>
                                    Partner with startup companies to address needs to the company development.
                                </Card.Text>
                                <Button variant="link" href="/projects">VIEW PROJECTS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}
            <Container fluid className="contentContainer">
                <div className="projectType">
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
                </div>
                <div className="timelineContainer">
                    <Card className="projectTypeCard">
                        <Card.Body>
                            <Card.Title>Roles</Card.Title>
                            <Row>
                                <Col>
                                    <Button className="timelineButton" variant="dark" onClick={() => this.setState({isStudent: true})}>Students</Button>
                                </Col>
                                <Col>
                                    <Button className="timelineButton" variant="dark" onClick={() => this.setState({isStudent: false})}>Clients</Button>
                                </Col>
                            </Row>
                            <Row className="timelineRow">
                                {
                                    this.state.isStudent? 
                                        (<HorizontalNonLinearStepper data={this.state.Student}/>) : 
                                        (<HorizontalNonLinearStepper data={this.state.Client}/>)
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div> 
      )
    }
  }
  
export default MainContent;