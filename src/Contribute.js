import React from 'react';
import Iframe from 'react-iframe'
import { Tabs, Tab, Container, Row } from 'react-bootstrap';
import './Contribute.css';


export const Contribute = () => (
    <Container fluid>
        <div className="contribute-container">
        <h2 className="title">Help us Build the Future of Lunar Exploration</h2>

            <p className="explainer-text-two">
                The Lunar Open Architecture is an evolving, open, and crowd-sourced effort. In order to develop a truly
                comprehensive roadmap of lunar missions, we are soliciting entries from around the world. Please use the forms below
                to enter a new mission or edit existing missions. When entering new missions, please include a valid source to ensure credibility
                of the information. We especially encourage entries regarding missions that have been recently announced. 
                <br></br>
                <br></br>
                If you'd like to receive updates about this project, please sign up using the form below.
            </p>

        </div>

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
)

