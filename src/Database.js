import React from 'react';
import Iframe from 'react-iframe'
import { Row, Container, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    margin: 0;
}

.nav-link {
    color: black;
    font: Roboto
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

export const Database = () => (
    <Styles>
        <Container fluid>
            <Row><Title>Lunar Missions Database</Title></Row>
            <Row><Paragraph>
                
                This database is incomplete. You can help by <Link to="./Contribute">submitting missions,</Link> or <Link to="./Contribute">updating records</Link> with information regarding payloads, technologies, goals, objectives, funding, and more.
                <br></br></Paragraph>

            </Row>

            <Tabs defaultActiveKey="database" id="uncontrolled-tab-example">
                    <Tab eventKey="database" title="Mission Database">
                        <Iframe url = "https://airtable.com/embed/shrOGLTaTrTsP1auC?backgroundColor=gray&viewControls=on"
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "1000"
                            frameBorder = "10px" />
                    </Tab>
            <Tab eventKey="gallery" title="Mission Gallery">
                <Iframe url ="https://airtable.com/embed/shrdju3tMnyOxr3DF?backgroundColor=gray&viewControls=on"
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
