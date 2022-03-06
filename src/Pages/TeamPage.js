import React from 'react';
import {Container, Card} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../imgs/logos/icon.png';

class TeamPage extends React.Component {
  render() {
    const {president, BD, Event, Marketing, Technical} = this.props.currentTeam;
    return (
      <div>
        <h1>2021-2022 Executives Team</h1>
        <Container>
            <h2>President</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{president.name}</Card.Title>
                    <Card.Subtitle>{president.year}</Card.Subtitle>
                    <Card.Link href={president.email}>Contact Me</Card.Link>
                </Card.Body>
            </Card>
            <h2>Business Development Vice-Presidents</h2>
            <div className="row">
                {BD.map(bdvp => (
                <Card key={bdvp.name} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>{bdvp.name}</Card.Title>
                        <Card.Subtitle>{bdvp.year}</Card.Subtitle>
                        <Card.Link href={bdvp.email}>Contact Me</Card.Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
            <h2>Event Vice-Presidents</h2>
            <div className="row">
                {Event.map(eventvp => (
                <Card key={eventvp.name} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>{eventvp.name}</Card.Title>
                        <Card.Subtitle>{eventvp.year}</Card.Subtitle>
                        <Card.Link href={eventvp.email}>Contact Me</Card.Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
            <h2>Marketing Vice-Presidents</h2>
            <div className="row">
                {Marketing.map(marketvp => (
                <Card key={marketvp.name} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>{marketvp.name}</Card.Title>
                        <Card.Subtitle>{marketvp.year}</Card.Subtitle>
                        <Card.Link href={marketvp.email}>Contact Me</Card.Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
            <h2>Technical Managers</h2>
            <div className="row">
                {Technical.map(techMan => (
                <Card key={techMan.name} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>{techMan.name}</Card.Title>
                        <Card.Subtitle>{techMan.year}</Card.Subtitle>
                        <Card.Link href={techMan.email}>Contact Me</Card.Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </Container>
      </div>
    )
  }
}

export default TeamPage;