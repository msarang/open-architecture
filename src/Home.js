import React from 'react';
import {Container, Row, Card, Button, CardGroup, Col, Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import ImageOne from "./lunar_surface.png";
import ImageTwo from "./earthrise.jpg";

const SectionOne = styled.div`

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 20px;
}
    .row {
        align-self: center;
    }
    .card {
        margin: 50px;
        border: 0px;
    }
    
    .card-body {
        display: flex;
        flex-direction: column;
    }
`;

const SectionTwo = styled.div`

    .container {
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        background: white;
        opacity: 0.9;
        width: 100%;
        height: 500px;
}

    .row {
        display: inline;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
    }

    .col {
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
        padding bottom: 10px;
    }

`;
const H2 = styled.h2 `
    font: roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
    align-self: center;

`;
const P = styled.p `
    font: roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: white;
    align-self: center;
`;

const H3 = styled.h2 `
    font: roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    color: black;
    text-align: center;

`;

const P2 = styled.p `
    font: roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: black;
`;

export const Home = () => (
    <Container>
        <Jumbotron fluid>
            <Container>
                <h1>Welcome to the Open Lunar Architecture Project</h1>
                <p>
                We believe the future of lunar exploration should be collaborative, open, and shared.
                </p>
            </Container>
        </Jumbotron>
        <SectionOne>
            <Container>
                <Row><H2>Welcome to the Open Lunar Architecture Project</H2></Row>
                <Row><P>We believe the future of lunar exploration should be collaborative, open, and shared.</P></Row>
            </Container>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Img src={ImageOne}/>
                        <Card.ImgOverlay>
                        <Card.Body>
                            <Button variant="primary">Explore the Roadmap</Button>
                        </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card>
                        <Card.Img src={ImageTwo}alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Button variant="primary" href="./Database">Explore the Database</Button>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Container>
            </SectionOne>
            <SectionTwo>
                <Container>
                    <Row>
                        <Col><H3>The Project</H3></Col>
                        <Col xs={12}><P2>A sustainable future lunar infrastructure depends on information-sharing: currently, this happens behind closed doors, with results manifested in large, static roadmaps (e.g. NASA Technology Roadmaps, ESA Space Resources Strategy, LEAG-LER, Global Exploration Roadmap) with unknown utility. With diversity in the space industry increasing, we will have to adopt a collaborative and sustainable aproach towards exploration in order to achieve increasingly complex and diverse mission objectives.</P2>
                    <P2>We are developing an open lunar architecture in service of this mission: to support the realization of a shared lunar future by developing this curated, dynamic, and interactive tool to represent existing lunar exploration roadmaps, and extend them into the 21st century.</P2></Col>
                    </Row>
                </Container>
            </SectionTwo>
            <SectionOne>
                <Container>
                    <Row><H2>The Team</H2></Row>
                </Container>
            </SectionOne>
    </Container>
)