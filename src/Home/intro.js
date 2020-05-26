import React from 'react';
import {Container,Card,Col,Row,Image, Button} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Moon from "./moon_background.png";
import ImageOne from "./lunar_surface.png";
import ImageTwo from "./earthrise_over_moon.jpg";

const ContainerStyle = styled(Container)`
    background-color: black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const FlexRow = styled(Row)`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-content: stretch;
    justify-content: center;
`


const ImageWrapper = styled(Col)`
    flex-grow: 1;
    flex-direction: column;
    display: flex;
`

const ImageStyled = styled(Image)`
    flex-grow: 1;
    max-height: 45vh;
    min-width: 650px;
    max-width: 60vw;
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
    max-width: 20rem;
    max-height: 20rem;
    min-width: 20rem;
    min-height: 20rem;
`

const Title = styled.h1`
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Lato', sans-serif;
    font-size: 6vw;
    padding-top: 2%;
    padding-left: 5%;
    text-align: center;
`
const Paragraph = styled.p`
    font-family: 'Lato', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    font-size: 3rem;
    text-align: center;
`


export const Intro = () => (    

    <ContainerStyle fluid>
        <FlexRow> 
            <Title>Welcome to The Lunar Open Architecture Project</Title>
        </FlexRow>
        <FlexRow> 
            <Paragraph>We believe the future of lunar exploration should be open, shared, and collaborative</Paragraph>
        </FlexRow>


        <Row>

        <ImageWrapper><ImageStyled src={Moon} /></ImageWrapper>


        <Col>
            
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

            <Col></Col>

        </Col>


        </Row>

    </ContainerStyle>

);