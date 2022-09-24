import React, { Component } from 'react';

import { ListGroup,  Card, Accordion } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/EventPage.css';

class ProjectBox extends Component {
    render(){
        const {eventName, eventTime, onlineEvent, eventLocation, eventDescription, eventDone, eventReplay, 
            eventGuest, eventManager, registrationRequired, registrationLink} = this.props.event;
        return(
            <Card className="eventCard">
              <Card.Body>
                <div className="event-title-border">
                    <Card.Title className="event-title">{eventName}</Card.Title>
                </div>
                <Card.Subtitle className="event-subtitle">
                    Event Time: {eventTime}
                    {!onlineEvent && (
                        <div>
                            Event Location: {eventLocation}
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
                                        <div className="event-guest-name"> {guest.name }</div>
                                        <div>
                                            <img className ="event-guest-image" src={guest.photo} alt="" /> <br/>
                                            {guest.bio} 
                                        </div>
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
                            <a href={eventReplay}> Event Replay Link </a>
                        </Accordion.Body>
                    </Accordion.Item>
                    )}
                    {!eventDone && registrationRequired && (
                    <Accordion.Item eventKey="registration">
                        <Accordion.Header>Event Registration</Accordion.Header>
                        <Accordion.Body>
                            <a href={registrationLink}> Register Here </a>
                        </Accordion.Body>
                    </Accordion.Item>
                    )}
                    {eventDone && (
                        <Accordion.Item eventKey="manager">
                        <Accordion.Header>Event Manager</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                            {eventManager.map(manager => (
                                <ListGroup.Item key={manager.name}> 
                                    <div className="ms-2 me-auto">
                                        <div className="event-guest-name"> {manager.name }</div>
                                        <div>
                                            <img className ="event-guest-image" src={manager.photo} alt="" /> <br/>
                                            {manager.discipline} 
                                        </div>
                                        <div>
                                            <a href={manager.linkedIn}>LinkedIn Profile</a>
                                        </div>
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