import React, { Component } from 'react';

import { Button, ListGroup,  Card, Accordion } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/ProjectsPage.css';

class ProjectBox extends Component {
    render(){
        const {organizationName, projectTitle, description, apply, teamMembers, roles, aboutOrg} = this.props.project;
        return(
            <Card className="projectCard">
              <Card.Body>
                <Card.Title>{organizationName}</Card.Title>
                <Card.Subtitle>{projectTitle}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                {apply && (
                  <Button className="cardButton">Apply</Button>
                )}
                <Accordion>
                  <Accordion.Item eventKey="aboutOrg">
                    <Accordion.Header>About {organizationName} </Accordion.Header>
                    <Accordion.Body>{aboutOrg}</Accordion.Body>
                  </Accordion.Item>
                  {apply && (
                    <Accordion.Item eventKey="roles">
                      <Accordion.Header>Roles</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup>
                        {roles.map(role => (
                          <ListGroup.Item key={role}>{role}</ListGroup.Item>
                        ))}
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  )}
                  {!apply && (
                    <Accordion.Item eventKey="teamMembers">
                      <Accordion.Header>Team Members</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup>
                          {teamMembers.map(member => (
                            <ListGroup.Item key={member.name}>
                              <div className="ms-2 me-auto">
                                <div> <b>{member.name}</b> {member.year}</div>
                                {member.position} 
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  )}
                </Accordion>
              </Card.Body>
            </Card>
        )
    }
}

export default ProjectBox;