import React from 'react';

import EventPage from '../../Pages/EventPage';
import NavBar from '../NavBar';
import Footer from '../Footer';
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
                    eventName: "Elevator Pitch",
                    eventTime: "2022.May",
                    onlineEvent: true,
                    eventDescription:
                        "This workshop is designed for an elevator pitch, which is a short, well-crafted pitch that often accompanies the introduction and provides key information about who you are and why a potential employer would want to hire you.",
                    key:"resume",
                    eventGuest:[
                        {name: "Tan Lin", bio: "", photo: "guest-photo-1.jpeg"},
                        {name :"Saron Nigusie", bio: "", photo: "guest-photo-1.jpeg"}
                    ],
                    eventDone: true,
                    eventReplay: "https://drive.google.com/file/d/1H28wMr3f951ErPYTtekdaKKft3NgUH8u/view?usp=sharing",
                    registrationRequired: true,
                    registrationLink: "https://docs.google.com/forms/d/17Z1iJ0rO8GcNpGqVuFPlEiQd9SAfsurjE3-WXcY60aU/edit"
                },
                {
                    eventName: "Mock Interview",
                    eventTime: "2022.Feb",
                    onlineEvent: true,
                    eventDescription:
                        "This workshop is aiming to improve applicants' interview skills by having mock interviews with our guest interviewers who have rich experience",
                    key:"resume",
                    eventGuest:[
                        {name: "Yibo Chen", bio: "Currently Computer Science (Previously studying in Software Engineering)", photo: "guest-photo-1.jpeg"},
                        {name :"Cony Qin ", bio: "Chem 2T3 Minors in Advanced Manufacturing and Business Engineering", photo: "guest-photo-1.jpeg"},
                        {name :"Felix Deng ", bio: "Mech 2T3 PTC Inc", photo: "guest-photo-1.jpeg"},
                        {name :"Catherine ", bio: "ECE 2T3 IBM", photo: "guest-photo-2.jpeg"},
                        {name :"Loewe and Cindy", bio: "obster.io", photo: "guest-photo-1.jpeg"},
                        {name :"Jane ", bio: "Civil Engineering", photo: "guest-photo-1.jpeg"}
                    ],
                    eventDone: true,
                    eventReplay: "None",
                    registrationRequired: true,
                    registrationLink: "link"
                },
                {
                    eventName: "Resume & Interview Workshop",
                    eventTime: "2022.Jan",
                    onlineEvent: true,
                    eventDescription:
                        "Invite alumni or students who had worked in a popular company to our online seminar, and share experience with our audience about how to write resume, cover letter or do interview targeted to these specified companies.",
                    key:"resume",
                    eventGuest:[
                        {name: "Wilison Deng", bio: "Founder of", photo: "guest-photo-1.jpeg"},
                        {name :"Yiran Liang", bio: "MARS Indy2T2 +PEY", photo: "guest-photo-1.jpeg"},
                        {name: "Annie Gao ", bio: "Intel ECE2T2 +PEY", photo: "guest-photo-1.jpeg"},
                        {name: "Jackie Cheng ", bio: "Cheng Ontario Power Generation Material Science Engineering 2T1 + PEY", photo: "guest-photo-1.jpeg"}
                    ],
                    eventDone: true,
                    eventReplay: "None",
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
                <Footer />
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