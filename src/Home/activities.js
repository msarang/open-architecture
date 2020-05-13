import React from 'react';
import {Container, Row, Card, Button, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
import { FaUserAstronaut } from 'react-icons/fa'; 
import { FaRocket } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { FaSatellite } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link} from 'react-router-dom';

const Styles = styled.div`
.container-fluid {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3%;
}

.row {
    display: flex;
    justify-content: center;
}

.col {
    display: flex;
    justify-content: space-evenly;
    padding-left: 100px;
    padding-right: 100px;
    width: inherit;
}

`;

const Heading = styled.h2 `
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding-bottom: 25px;
}`

const Body = styled.p `
    font-size: 20px;
    color: white;
}`



export const Activities = () => (
    <Styles>
        <IconContext.Provider value = {{color: 'white', size: '3rem'}}>
            <Container fluid>
                <Row>
                    <Heading>Explore by category</Heading>
                </Row>
                <Row xs={4} fluid>
                    <Col><FaUserAstronaut/></Col>
                    <Col><FaWrench/></Col>
                    <Col><FaSatellite/></Col>
                    <Col><FaRocket/></Col>
                </Row>
                <Row xs={4} fluid>
                    <Col><Link to="./missions">Missions</Link></Col>
                    <Col><Body>Technologies</Body></Col>
                    <Col><Body>Instruments/Payloads</Body></Col>
                    <Col><Body>Actors</Body></Col>
                </Row>
        </Container>
    </IconContext.Provider>
    </Styles>
)