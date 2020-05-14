import React from 'react';
import {Container,Card,Col,Row,Image, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {Team} from "./team";
import {Project} from "./Project";
import ImageOne from "./lunar_surface.png";
import ImageTwo from "./earthrise_over_moon.jpg";
import Moon from "./moon_background.png";
import {Link} from 'react-router-dom';



const ContainerStyle = styled(Container)`
    min-width: 100vw;    
    padding: 0;
    margin: 0;
    background-color: black;
    min-height: 100vh;
    display: flex;
`;

const ContainerHome = styled(Container)`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 0;
    margin: 0;
`;

const Title = styled.h1`
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Lato', sans-serif;
    font-size: 6em;
    margin-bottom: 5rem;
    margin-top: 5rem;
    padding-left: 3rem;
`
const ImageWrapper = styled.div`
    flex-grow: 1;
    flex-direction: column;
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
`

const ImageStyled = styled(Image)`
    flex-grow: 1;
    max-height: 50vh;
    max-width: 50vw;
    fluid: true;
`

const CardWrapper = styled.div`
    flex-grow: 1;
    flex-direction: row;
    display: flex;
`

const CardResponsive = styled(Card)`
    flex-grow: 1;
    fluid:true;
    max-width: 20rem;
    max-height: 20rem;

`
const Wrapper = styled(Col)`
    flex-grow: 1;
    flex-direction: column;
    display: flex;
    align-items: end;
    margin: 1rem;
    align-self: center;
    color: white;
`
const Paragraph = styled.p`
    font-family: 'Lato', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 100px;
    text-align: right;
    padding-right: 100px;
    padding-bottom: 0px;
    font-size: 2em;
`
const StyledLink = styled(Link)`
    color: white;
`;

export const Home = () => (
    <React.Fragment>
        <ContainerStyle>
            <ContainerHome fluid>

                <Row xs={12}> 
                    <Col className="md-auto"><Wrapper><Title>Welcome to The Lunar Open Architecture Project</Title></Wrapper></Col>
                </Row>

                <Row xs={6}>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row xs={12}>
                    <Col><ImageWrapper><ImageStyled src={Moon} /></ImageWrapper></Col>

                    <Col>
                    <Row>

                        <CardWrapper xs={2}>
                                <CardResponsive>
                                    <Card.Img variant="top" src={ImageOne} />
                                    <Card.ImgOverlay>
                                    <Card.Title>
                                        <StyledLink to ="./Database">Explore the Database</StyledLink>
                                    </Card.Title>
                                    </Card.ImgOverlay>
                                </CardResponsive>
                        </CardWrapper>

                        <CardWrapper xs={2}>
                            <CardResponsive>
                                <Card.Img variant="top" src={ImageTwo} />
                                <Card.ImgOverlay>
                                <Card.Title>
                                        <StyledLink>Explore the Roadmap</StyledLink>
                                    </Card.Title>
                                </Card.ImgOverlay>
                            </CardResponsive>
                        </CardWrapper>
                        </Row>
                        <Row>
                        <Col xs={12}>
                            <Paragraph>We believe the future of lunar exploration should be open, shared, and collaborative</Paragraph>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            
            </ContainerHome>
        </ContainerStyle>

        <Project />
        <a id="Team"><Team /></a>

    </React.Fragment>
)