import React from 'react';
import {Jumbotron, Container, Row, Card, Button, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Image from "./place.jpg";

const SectionOne = styled.div`
    .jumbotron {
        background-color: black;
        padding-bottom: 0px;
        padding-top: 0px;
    }

    .container {
        width: 80%;
        padding-top: 30px;
        text-align: center;
    }

    .row {
        display: inline-block;
    }

    .card {
        margin: 10px;
        float: none;
        margin-bottom: 50px;
        width: 300px;
        display: inline-block;
    }

    .card-body {
        margin: auto;
        margin-bottom: 10px;
        align-items: center;
        text-align: center;
    }

`;

const H2 = styled.h2 `
    font: roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    display: flex;
    color: #FFFFFF;
`;

const P = styled.p `
    font: roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
`;

export const Home = () => (
    <React.Fragment>
        <SectionOne>
            <Jumbotron>
                <Container>
                    <H2>Welcome to the Open Lunar Architecture Project</H2>
                    <P>We believe the future of lunar exploration should be collaborative, open, and shared.</P>
                </Container>
            </Jumbotron>
            <Container>
                <Card className="bg-dark text-white">
                    <Card.Img src={Image}alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Body>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                    <Card.Img src={Image}alt="Card image"/>
                    <Card.ImgOverlay>
                    <Card.Body>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <Container fluid>
                <Row>
                <Col><H2>The Project</H2></Col>
                <Col>
                <P>
                A sustainable future lunar infrastructure depends on information-sharing: currently, this happens behind closed doors, with results manifested in large, static roadmaps (e.g. NASA Technology Roadmaps, ESA Space Resources Strategy, LEAG-LER, Global Exploration Roadmap) with unknown utility. With diversity in the space industry increasing, we will have to adopt a collaborative and sustainable aproach towards exploration in order to achieve increasingly complex and diverse mission objectives.
                </P>
                <P>We are developing an open lunar architecture in service of this mission: to support the realization of a shared lunar future by developing this curated, dynamic, and interactive tool to represent existing lunar exploration roadmaps, and extend them into the 21st century.
                </P>
                </Col>
                </Row>
            </Container>
        </SectionOne>
    </React.Fragment>
)