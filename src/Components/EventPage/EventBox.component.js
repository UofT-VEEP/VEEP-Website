import React, { Component } from 'react';

import { ListGroup,  Card, Accordion } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectBox extends Component {
    render(){
        const {eventName, eventTime, onlineEvent, eventLocation, eventDescription, eventDone, eventReplay, eventGuest} = this.props.event;
        return(
            <Card>
              <Card.Body>
                <Card.Title>{eventName}</Card.Title>
                <Card.Subtitle>
                    Time: {eventTime} 
                    {!onlineEvent && (
                        <div>
                            Location: {eventLocation}
                        </div>
                    )}
                </Card.Subtitle>
                <Card.Text>{eventDescription}</Card.Text>
                <Accordion>
                    <Accordion.Item eventKey="guest">
                        <Accordion.Header>Event Guests</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                            {eventGuest.map(guest => (
                                <ListGroup.Item key={guest.name}> 
                                    <div className="ms-2 me-auto">
                                        <div> <b>{guest.name}</b></div>
                                        {guest.bio} 
                                    </div> 
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    {onlineEvent && eventDone && (
                    <Accordion.Item eventKey="replay">
                        <Accordion.Header>Event Replay</Accordion.Header>
                        <Accordion.Body>
                            {eventReplay}
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