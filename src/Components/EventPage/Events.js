import React from 'react';

import EventPage from '../../Pages/EventPage';
import NavBar from '../NavBar';
import { Col, Accordion } from 'react-bootstrap';
import '../../Styles/SideBar.css';
import '../../Styles/EventPage.css';

class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            eventType: 'upcoming',

            // Event Input Template: (Copy Paste and Uncomment it to fill out)
            // eventName: "",
            // eventTime: "",
            // eventLocation: "",
            // onlineEvent: true/false,
            // eventDescription:
            //     "",
            // key:"",
            // eventGuest:[
            //     {name: "", bio: "", photo: ""}
            // ],
            // eventDone: true/false,
            // eventReplay: "link here",
            // registrationLink: "link here"
            // Note: 
            // 1. If it's online event, don't fill out location and delete the element
            // 2. Only fill out eventReplay if it's online event and the event is done. Otherwise, delete the element
            upcomingEvents: [
                {
                    eventName: "Resume & Interview Workshop",
                    eventTime: "Jan",
                    onlineEvent: true,
                    eventDescription:
                        "This event",
                    key:"resume",
                    eventGuest:[
                        {name: "Loewe Ke", bio: "Founder of", photo: "guest-photo-1.jpeg"},
                        {name :"Catherine", bio: "President of VEEP", photo: "guest-photo-2.jpeg"}
                    ],
                    eventDone: true,
                    eventReplay: "link here",
                    registrationRequired: true,
                    registrationLink: "link"
                },
                {
                    eventName: "Recruitment Event",
                    eventTime: "Sep",
                    onlineEvent: false,
                    eventLocation: "SF",
                    eventDescription:
                        "This event is a recruitment event",
                    key:"recruitment",
                    eventGuest:[
                        {name: "Catherine", bio: "President of VEEP", photo: "guest-photo-2.jpeg"},
                    ],
                    eventDone: false,
                    registrationRequired: true,
                    registrationLink: "link"
                },
                {
                    eventName: "Recruitment Event",
                    eventTime: "Sep",
                    onlineEvent: false,
                    eventLocation: "SF",
                    eventDescription:
                        "This event is a recruitment event",
                    key:"recruitment",
                    eventGuest:[
                        {name: "Catherine", bio: "President of VEEP", photo: "guest-photo-2.jpeg"},
                    ],
                    eventDone: false,
                    registrationRequired: true,
                    registrationLink: "link"
                }
            ],
            pastEvents: [
                {
                    eventName: "Resume & Interview Workshop",
                    eventTime: "Jan",
                    onlineEvent: true,
                    eventDescription:
                        "This event",
                    key:"resume",
                    eventGuest:[
                        {name: "Loewe Ke", bio: "Founder of", photo: "guest-photo-1.jpeg"},
                        {name :"Catherine", bio: "President of VEEP", photo: "guest-photo-2.jpeg"}
                    ],
                    eventDone: true,
                    eventReplay: "link here",
                    registrationRequired: true,
                    registrationLink: "link"
                },
                {
                    eventName: "Resume & Interview Workshop",
                    eventTime: "Jan",
                    onlineEvent: true,
                    eventDescription:
                        "This event",
                    key:"resume",
                    eventGuest:[
                        {name: "Loewe Ke", bio: "Founder of", photo: "guest-photo-1.jpeg"},
                        {name :"Catherine", bio: "President of VEEP", photo: "guest-photo-2.jpeg"}
                    ],
                    eventDone: true,
                    eventReplay: "link here",
                    registrationRequired: true,
                    registrationLink: "link"
                },
                {
                    eventName: "Resume & Interview Workshop",
                    eventTime: "Jan",
                    onlineEvent: true,
                    eventDescription:
                        "This event",
                    key:"resume",
                    eventGuest:[
                        {name: "Loewe Ke", bio: "Founder of", photo: "guest-photo-1.jpeg"},
                        {name :"Catherine", bio: "President of VEEP", photo: "guest-photo-2.jpeg"}
                    ],
                    eventDone: true,
                    eventReplay: "link here",
                    registrationRequired: true,
                    registrationLink: "link"
                }
            ]
        }
        
    }

    render() {
        const switchToUpcoming = () => {
            this.setState({
                eventType: 'upcoming'
            })
        }
        const switchToPast = () => {
            this.setState({
                eventType: 'past'
            })
        }

        return(
            <div>
                <NavBar />
                <div>
                    <Col className="sideBarCol">
                        <SideBar>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0" className="sidebar-accordion" onClick={switchToUpcoming}>
                                    <Accordion.Header>
                                        Upcoming Events
                                    </Accordion.Header>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="sidebar-accordion" onClick={switchToPast}>
                                    <Accordion.Header>
                                        Past Events
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-dropdown">
                                        <PastEventsDropdown/>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </SideBar>
                        
                    </Col>
                    <Col className="contentCol">
                        { this.state.eventType==='upcoming' && (
                            <div>
                                <h1> Upcoming Events </h1>
                                <EventPage eventsToDisplay={this.state.upcomingEvents}/>
                            </div>
                        )}
                        { this.state.eventType==='past' && (
                            <div>
                                <h1> Past Events </h1>
                                <EventPage eventsToDisplay={this.state.pastEvents}/>
                            </div>
                        )}
                    </Col>
                </div>
            </div>
        )
    }
} 

function PastEventsDropdown() {

    function DropdownItem(props) {
        return (
            <div className="dropdown-item">
                {props.children}
            </div>
        );
    }

    return (
        <div className="dropdown-container">
            <DropdownItem> 2021 - 2022 </DropdownItem>
            <DropdownItem> 2020 - 2021 </DropdownItem>
            <DropdownItem> 2019 - 2020 </DropdownItem>
            <DropdownItem> 2018 - 2019 </DropdownItem>
        </div>
    );
}


function SideBar(props) {

    return (
        <div className="sidebar">
            { props.children }
        </div>
    );
}

export default Events;