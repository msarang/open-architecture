import React from 'react';
import {Container, Row, Card, Button, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
import { FaUserAstronaut } from 'react-icons/fa'; 
import { FaRocket } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { FaSatellite } from 'react-icons/fa';
import { IconContext } from 'react-icons';

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
    padding-bottom: 1%;
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
}`

const Body = styled.p `
    font-size: 20px;
    color: white;
}`



export const Activities = () => (
    <Styles>
        <IconContext.Provider value = {{color: '#6889AB', size: '5rem'}}>
            <Container fluid>
                <Row>
                    <Heading>Explore lunar activities by category</Heading>
                </Row>
                <Row xs={5} fluid>
                    <Col><FaUserAstronaut/>hey</Col>
                            
                    <Col><FaRocket/></Col>
                            
                    <Col><FaWrench/></Col>

                    <Col><FaSatellite/></Col>
                            
                    <Col><FaSatellite/></Col>
                </Row>
        </Container>
    </IconContext.Provider>
    </Styles>
)