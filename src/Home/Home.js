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
    background-color: black;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    height: 90vh;
`;

const FlexRow = styled(Row)`
    flex-grow: 1;
`

const Title = styled.h1`
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Lato', sans-serif;
    font-size: 6vw;
    padding-top: 2%;
    padding-left: 5%;
`
const ImageWrapper = styled(Col)`
    flex-grow: 1;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
`

const ImageStyled = styled(Image)`
    flex-grow: 1;
    max-height: 45vh;
    min-width: 30vw;
    fluid: true;
`

const CardWrapper = styled.div`
    flex-grow: 1;
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
    padding: 15px;
`

const CardResponsive = styled(Card)`
    flex-grow: 1;
    max-width: 20rem;
    max-height: 20rem;
`

const Paragraph = styled.p`
    font-family: 'Lato', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 100px;
    font-size: 2vw;
    text-align: right;
`
const StyledLink = styled(Link)`
    color: white;
`;

export const Home = () => (
    <React.Fragment>
        <ContainerStyle fluid>
                <FlexRow md={1}> 
                    <Col className="md-auto"><Title>Welcome to The Lunar Open Architecture Project</Title></Col>

                </FlexRow>

                <FlexRow xs={12}>
   
                <ImageWrapper><ImageStyled src={Moon} /></ImageWrapper>

                
                <Col className="md-auto">
                    
                    <CardWrapper>
                        
                        <CardResponsive>
                            <Card.ImgOverlay> <Link to ="./Database">Explore the Database</Link></Card.ImgOverlay>
                                    <Card.Img variant="top" src={ImageOne} />
                        </CardResponsive>

                        <CardResponsive>
                            <Card.ImgOverlay><Link>Explore the Roadmap</Link></Card.ImgOverlay>
                        <Card.Img variant="top" src={ImageTwo} />
                        </CardResponsive>

                    </CardWrapper>

                    <Col><Paragraph>We believe the future of lunar exploration should be open, shared, and collaborative</Paragraph></Col>

                </Col>


                </FlexRow>

        </ContainerStyle>
        <Project />
        <a id="Team"><Team /></a>
    </React.Fragment>
)