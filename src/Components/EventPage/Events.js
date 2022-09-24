import React from 'react';

import EventPage from '../../Pages/EventPage';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Col, Accordion } from 'react-bootstrap';

import JohnZhou from '../../imgs/event/John_Zhou.JPG';
import LucyQu from '../../imgs/event/Lucy_Qu.JPG';
import ShujieLi from '../../imgs/event/Shujie_Li.JPG';

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
                    key:"resume4",
                    eventGuest:[
                        {name: "Loewe Ke", bio: "Founder of", photo: "guest-photo-1.jpeg"},
                        {name :"Catherine", bio: "President of VEEP", photo: "guest-photo-2.jpeg"}
                    ],
                    eventDone: false,
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
                    key:"recruitment1",
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
            pastEvents_2022: [
                {
                    eventName: "Elevator Pitch",
                    eventTime: "2022.May",
                    onlineEvent: true,
                    eventDescription:
                        "This workshop is designed for an elevator pitch, which is a short, well-crafted pitch that often accompanies the introduction and provides key information about who you are and why a potential employer would want to hire you.",
                    key:"resume2",
                    eventManager:[
                        {name :"Shujie Li", discipline: "Civil Engineering", linkedIn:"www.linkedin.com/in/shujie-li-8a377923b", photo:ShujieLi},
                        {name :"Bella (Guang) Yang", discipline: "Electrical and Computer Engineering", linkedIn:"", photo: "guest-photo-1.jpeg"}
                    ],
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
                    eventManager:[
                        {name: "Ziyu (Lucy) Qu", discipline: "Computer Engineering", linkedIn:"https://www.linkedin.com/in/ziyu-qu",photo:LucyQu},
                        {name :"Shujie Li", discipline: "Civil Engineering", linkedIn:"www.linkedin.com/in/shujie-li-8a377923b", photo:ShujieLi}
                    ],
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
                    key:"resume1",
                    eventManager:[
                        {name: "Litao (John) Zhou", discipline: "Electrical and Computer Engineering", linkedIn:"https://www.linkedin.com/in/john-litao-zhou",photo:JohnZhou},
                        {name :"Mavis (Siting) Chen", discipline: "Industrial Engineering", linkedIn:"", photo: "guest-photo-1.jpeg"}
                    ],
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

            ],
            pastEvents_2021: [
                {
                    eventName: "Mock Interview",
                    eventTime: "2021.Feb",
                    onlineEvent: true,
                    eventDescription:
                        "This workshop is aiming to improve applicants' interview skills by having mock interviews with our guest interviewers who have rich experience",
                    key:"resume",
                    eventManager:[
                        {name: "Ziyu (Lucy) Qu", discipline: "Computer Engineering", linkedIn:"https://www.linkedin.com/in/ziyu-qu",photo:LucyQu},
                        {name :"Shujie Li", discipline: "Civil Engineering", linkedIn:"www.linkedin.com/in/shujie-li-8a377923b", photo:ShujieLi}
                    ],
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
                }
            ],
            pastEvents_2020: [
                {
                    eventName: "Resume & Interview Workshop",
                    eventTime: "2020.Jan",
                    onlineEvent: true,
                    eventDescription:
                        "Invite alumni or students who had worked in a popular company to our online seminar, and share experience with our audience about how to write resume, cover letter or do interview targeted to these specified companies.",
                    key:"resume1",
                    eventManager:[
                        {name: "Litao (John) Zhou", discipline: "Electrical and Computer Engineering", linkedIn:"https://www.linkedin.com/in/john-litao-zhou",photo:JohnZhou},
                        {name :"Mavis (Siting) Chen", discipline: "Industrial Engineering", linkedIn:"", photo: "guest-photo-1.jpeg"}
                    ],
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
        const self = this; // To access this in function

        // Functions to switch between different event types on button click
        const switchToUpcoming = () => {
            this.setState({
                eventType: 'upcoming'
            })
        }
        const switchToPast_2022 = () => {
            this.setState({
                eventType: 'past_2022'
            })
        }
        const switchToPast_2021 = () => {
            this.setState({
                eventType: 'past_2021'
            })
        }
        const switchToPast_2020 = () => {
            this.setState({
                eventType: 'past_2020'
            })
        }

        function EventContent() {

            return (
                <div>
                    { self.state.eventType==='upcoming' && (
                        <div>
                            <h1> Upcoming Events </h1>
                            <EventPage eventsToDisplay={self.state.upcomingEvents}/>
                        </div>
                    )}
                    { self.state.eventType==='past_2022' && (
                        <div>
                            <h1> Past Events 2022 - 2023 </h1>
                            <EventPage eventsToDisplay={self.state.pastEvents_2022}/>
                        </div>
                    )}
                    { self.state.eventType==='past_2021' && (
                        <div>
                            <h1> Past Events 2021 - 2022 </h1>
                            <EventPage eventsToDisplay={self.state.pastEvents_2021}/>
                        </div>
                    )}
                    { self.state.eventType==='past_2020' && (
                        <div>
                            <h1> Past Events 2020 - 2021 </h1>
                            <EventPage eventsToDisplay={self.state.pastEvents_2020}/>
                        </div>
                    )}
                    <Footer />
                </div>
            );
        }
        
        // Sidebar in desktop view
        function SideBar(props) {

            return (
                <div className="sidebar">
                    { props.children }
                </div>
            );
        }

        function DesktopPage() {
        
            return (
                <div>
                    <NavBar />
                    <div>
                        <Col className="sideBarCol">
                            <SideBar>
                                <Accordion defaultActiveKey={['0']}>
                                    {/* <Accordion.Item eventKey="0" className="sidebar-accordion" onClick={switchToUpcoming}>
                                        <Accordion.Header>
                                            Upcoming Events
                                        </Accordion.Header>
                                    </Accordion.Item> */}
                                    <button type="button" className="sidebar-button" onClick={switchToUpcoming}>
                                        Upcoming Events
                                    </button>

                                    <Accordion.Item eventKey="1" className="sidebar-accordion">
                                        <Accordion.Header class="text-center">
                                            Past Events
                                        </Accordion.Header>
                                        <Accordion.Body className="accordion-dropdown">
                                            <div className="dropdown-container">
                                                <div className="dropdown-item" onClick={switchToPast_2022}> 2022 - 2023 </div>
                                                <div className="dropdown-item" onClick={switchToPast_2021}> 2021 - 2022 </div>
                                                <div className="dropdown-item" onClick={switchToPast_2020}> 2020 - 2021 </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </SideBar>
                            
                        </Col>
                        <Col className="contentCol">
                            <EventContent />
                        </Col>
                    </div>
                </div>
            );
        }

        function MobileDropdown() {

            return (
                <div>
                    <Accordion className="mobileDropdown">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                All Events
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <Accordion>
                                        <Accordion.Item eventKey="0" onClick={switchToUpcoming}>
                                            <Accordion.Header>
                                                Upcoming Events
                                            </Accordion.Header>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                Past Events
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-dropdown">
                                                <div className="dropdown-container">
                                                    <div className="dropdown-item" onClick={switchToPast_2022}> 2022 - 2023 </div>
                                                    <div className="dropdown-item" onClick={switchToPast_2021}> 2021 - 2022 </div>
                                                    <div className="dropdown-item" onClick={switchToPast_2020}> 2020 - 2021 </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            );
            
        }

        function MobilePage() {

            return (
                <div>
                    <NavBar />
                    <div>
                        <MobileDropdown />
                        <div className="mobileContent">
                            <EventContent />
                        </div>
                        
                    </div>
                </div>
            );
        }

        function AdaptiveEventPage() {
            const [width, setWidth] = React.useState(window.innerWidth);
            const switchPointWidth = 700;
        
            React.useEffect(() => {

                window.addEventListener("resize", () => setWidth(window.innerWidth));
            
              }, []);
        
              if (width > switchPointWidth) {
                    return (
                        <DesktopPage />
                    );
              }
              else {
                return (
                    <MobilePage />
                );
              }
        }

        return(

            <div>
                <AdaptiveEventPage />
            </div>
        )
    }
}


export default Events;