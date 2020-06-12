import React from 'react';
import Iframe from 'react-iframe'
import { Tabs, Tab, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .container-fluid {
        background-color:  white;
        padding-top: 40px;
        padding-bottom:0 ;
        padding-left: 5% ;
        padding-right: 10% ;
        margin-top: 0;

    }
    .row {
        padding-left: 20px;
    }
`;

const Title = styled.h1`
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 45px;
    text-align: center;
    color: black;
    margin-top: 20px;
    padding-bottom: 20px;

    @media (max-width: 700px) {
    font-size: 35px;
    }
    `
const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    color: black;
    padding-right: 100px;
    padding-bottom: 20px;

    @media (max-width: 700px) {
    font-size: 15px;
    }
`


export const Contribute = () => (
<Styles>
    <Container fluid>
        <Row>
        <Title>Help us Build the Future of Lunar Exploration</Title></Row>
            <Row>
            <Paragraph>
                The Lunar Open Architecture is an evolving, open, and crowd-sourced effort. In order to develop a truly
                comprehensive roadmap of lunar missions, we are soliciting entries from around the world. Please use the forms below
                to enter a new mission or edit existing missions. When entering new missions, please include a valid source to ensure credibility
                of the information. We especially encourage entries regarding missions that have been recently announced. 
                <br></br>
                <br></br>
                If you'd like to receive updates about this project, please sign up using the form below.
            </Paragraph>

            </Row>
        <Tabs defaultActiveKey="newmission" id="uncontrolled-tab-example">
            <Tab eventKey="newmission" title="Submit a New Mission">
                <Iframe url = "https://airtable.com/embed/shr3w3GwsY2vTYOw2?backgroundColor=gray"
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "1000"
                            frameBorder = "10px" />
            </Tab>
            <Tab eventKey="suggestion" title="Suggest an Edit">
                <Iframe url ="https://airtable.com/embed/shruDDalHMaFMCOlQ?backgroundColor=gray"
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "1000"
                            frameBorder = "10px" />
            </Tab>
            <Tab eventKey="updates" title="Sign up for Project Updates">
                <Iframe url ="https://docs.google.com/forms/d/e/1FAIpQLSfoyk_JZuw415Qo65K80FPPJmJqKH2jdj8N2aC2SyCvHimP-w/viewform?embedded=true" 
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "1000"
                            frameBorder = "10px" />
            </Tab>
        </Tabs>
    </Container>
</Styles>
)

