
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/TeamPage.css';

//import Icon from '../imgs/logos/linkedin-logo.png';

class TeamPage extends React.Component {
    render() {
        //const { icon } = this.props;
        const { president, BD, Event, Marketing, Technical } = this.props.currentTeam;
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
                                    {/*<Button href={"mailto:" + president.email}>Contact Me By Email</Button>*/}
                                    {/*<Button href={president.linkedIn}>Contact Me By linkedIn</Button>*/}
                                    <div className='teamPage_icon'>

                                        <a href={president.linkedIn} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a>
                                    </div>

                                    <div className='teamPage_icon'>
                                        <a href={"mailto:" + president.email} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg></a>

                                    </div>

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
                                        <Button href={"mailto:" + bdvp.email}>Contact Me By Email</Button>
                                        <a href={president.linkedIn} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a>
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
                                        <Button href={"mailto:" + eventvp.email}>Contact Me By Email</Button>
                                        <a href={president.linkedIn} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a>
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
                                        <Button href={"mailto:" + marketvp.email}>Contact Me By Email</Button>
                                        <a href={president.linkedIn} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a>
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
                                        <Button href={"mailto:" + techMan.email}>Contact Me By Email</Button>
                                        <a href={president.linkedIn} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></a>                            </Card.Body>
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