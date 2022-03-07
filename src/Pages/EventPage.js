import React from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap';

import EventBox from '../Components/EventPage/EventBox.component';

import 'bootstrap/dist/css/bootstrap.min.css';

class EventPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <Container>
          <Tabs defaultActiveKey="thisYear" className="mb-12">
              <Tab eventKey="thisYear" title="This Year's Events">
                <div>
                    <h2>Events This Year</h2>
                    {this.props.currentEvents.map(event => (
                        <EventBox key={event.key} event={event} />
                    ))}
                </div>
              </Tab>
              <Tab eventKey="current" title="Past Events">
                <div>
                  
                </div>
              </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}

export default EventPage;