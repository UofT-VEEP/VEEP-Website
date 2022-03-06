import React from 'react';

import EventPage from '../../Pages/EventPage';
import NavBar from '../Navbar';

class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // Event Input Template: (Copy Paste and Uncomment it to fill out)
            // eventName: "",
            // eventTime: "",
            // eventLocation: "",
            // onlineEvent: true/false,
            // eventDescription:
            //     "",
            // key:"",
            // eventGuest:[
            //     {name: "", bio:""},
            // ],
            // eventDone: true/false,
            // eventReplay: "link here",
            // Note: 
            // 1. If it's online event, don't fill out location and delete the element
            // 2. Only fill out eventReplay if it's online event and the event is done. Otherwise, delete the element
            currentEvents: [
                {
                    eventName: "Resume & Interview Workshop",
                    eventTime: "Jan",
                    onlineEvent: true,
                    eventDescription:
                        "This event",
                    key:"resume",
                    eventGuest:[
                        {name: "Loewe Ke", bio:"Founder of"},
                    ],
                    eventDone: true,
                    eventReplay: "link here",
                }
            ],
        }
    }

    render() {
        return(
            <div>
                <NavBar />
                <EventPage currentEvents={this.state.currentEvents}/>
            </div>
        )
    }
} 

export default Events;