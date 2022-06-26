import React from 'react';
import {Container} from 'react-bootstrap';

import EventBox from '../Components/EventPage/EventBox.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/EventPage.css';

class EventPage extends React.Component {
  render() {
    return (
      <div>
        <Container className="eventContainer">
          <div>
              {this.props.eventsToDisplay.map(event => (
                  <EventBox key={event.key} event={event} />
              ))}
          </div>
        </Container>
      </div>
    )
  }
}

export default EventPage;