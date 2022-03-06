import React, { Component } from 'react';

import { Container, Button, Tabs, Tab, Card, Accordion } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectBox extends Component {
    render(){
        const {organizationName, projectTitle, description, roles, apply, aboutOrg} = this.props.project;
        return(
            <Card>
              <Card.Body>
                <Card.Title>{projectTitle}</Card.Title>
                <Card.Subtitle>{organizationName}</Card.Subtitle>
                {apply && (
                  <Button>Apply</Button>
                )}
                <Card.Text>{description}</Card.Text>
                <Accordion>
                  <Accordion.Item eventKey="aboutOrg">
                    <Accordion.Header>About {organizationName} </Accordion.Header>
                    <Accordion.Body>{aboutOrg}</Accordion.Body>
                  </Accordion.Item>
                  {apply && (
                    <Accordion.Item eventKey="roles">
                      <Accordion.Header>Roles</Accordion.Header>
                      <Accordion.Body>
                        {roles.map(role => (
                          <Button key={role}>{role}</Button>
                        ))}
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