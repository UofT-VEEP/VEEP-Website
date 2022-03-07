import React from 'react';

import { Container, Button, Tabs, Tab, Card } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/MainContent.css';

class MainContent extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {

      }
    }
    
    render() {
      return (
        <div className="mainContent">
            <Container className="contentContainer">
                <Tabs fill justify defaultActiveKey="AboutUs" className="mb-3">
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
            <Container className="contentContainer">
                <h1>Project Types</h1>
                <Card>
                    <Card.Body>
                        <Card.Title>Community</Card.Title>
                        <Card.Text>
                            Work with local NFPs to address needs within the local Toronto Community.
                        </Card.Text>
                        <Button variant="link" href="/projects">VIEW PROJECTS</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Campus Clubs</Card.Title>
                        <Card.Text>
                            Work with campus clubs to address needs specific to the UofT community. 
                        </Card.Text>
                        <Button variant="link" href="/projects">VIEW PROJECTS</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Startups</Card.Title>
                        <Card.Text>
                            Partner with startup companies to address needs to the company development.
                        </Card.Text>
                        <Button variant="link" href="/projects">VIEW PROJECTS</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div> 
      )
    }
  }
  
export default MainContent;