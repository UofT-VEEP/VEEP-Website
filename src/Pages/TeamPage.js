import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/TeamPage.css';

class TeamPage extends React.Component {
  render() {
    const {president, BD, Event, Marketing, Technical} = this.props.currentTeam;
    return (
      <div>
        <h1 className="teamTitle">2021-2022 Executives Team</h1>
        <Container className="teamIntro">
            <h2 className="teamTitle">President</h2>
            <Row className="align-items-center">
                <Col>
                    <Card className="teamCard">
                        <Card.Img variant="top" src={president.pic} />
                        <Card.Body>
                            <Card.Title>{president.name}</Card.Title>
                            <Card.Subtitle>{president.year}</Card.Subtitle>
                            <Button href={"mailto:" + president.email}>Contact Me</Button>
                            <Card.Link href={president.linkedIn}>{president.linkedIn}</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h2 className="teamTitle">Business Development Vice-Presidents</h2>
            <Row className="justify-content-center">
                {BD.map(bdvp => (
                    <Col key={bdvp.name}>
                        <Card className="teamCard">
                        <Card.Img variant="top" src={bdvp.pic} />
                        <Card.Body>
                            <Card.Title>{bdvp.name}</Card.Title>
                            <Card.Subtitle>{bdvp.year}</Card.Subtitle>
                            <Button href={"mailto:" + bdvp.email}>Contact Me</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h2 className="teamTitle">Event Vice-Presidents</h2>
            <Row className="justify-content-md-center">
                {Event.map(eventvp => (
                    <Col key={eventvp.name}>
                        <Card className="teamCard">
                            <Card.Img variant="top" src={eventvp.pic} />
                            <Card.Body>
                                <Card.Title>{eventvp.name}</Card.Title>
                                <Card.Subtitle>{eventvp.year}</Card.Subtitle>
                                <Button href={"mailto:" + eventvp.email}>Contact Me</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h2 className="teamTitle">Marketing Vice-Presidents</h2>
            <Row className="justify-content-md-center">
                {Marketing.map(marketvp => (
                    <Col key={marketvp.name}>
                        <Card className="teamCard">
                            <Card.Img variant="top" src={marketvp.pic} />
                            <Card.Body>
                                <Card.Title>{marketvp.name}</Card.Title>
                                <Card.Subtitle>{marketvp.year}</Card.Subtitle>
                                <Button href={"mailto:" + marketvp.email}>Contact Me</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h2 className="teamTitle">Technical Managers</h2>
            <Row className="justify-content-md-center">
                {Technical.map(techMan => (
                    <Col key={techMan.name}>
                        <Card className="teamCard">
                            <Card.Img variant="top" src={techMan.pic} />
                            <Card.Body>
                                <Card.Title>{techMan.name}</Card.Title>
                                <Card.Subtitle>{techMan.year}</Card.Subtitle>
                                <Button href={"mailto:" + techMan.email}>Contact Me</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
      </div>
    )
  }
}

export default TeamPage;