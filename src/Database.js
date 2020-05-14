import React from 'react';
import Iframe from 'react-iframe'
import { Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`

.container-fluid {
    background-color: #F2F2F2;
    color: black;
    padding-top: 40px;
    padding-bottom:0 ;
    padding-left: 5% ;
    padding-right: 10% ;
    margin-top: 0;

}

.tab-container {
    background-color: white;
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
    color: black;
    font-family: 'Lato', sans-serif;
    font-size: 6em;

`
const Paragraph = styled.p`
    font-family: 'Lato', sans-serif;
    color: black;
    text-align: left;
    padding-right: 100px;
    font-size: 2em;
`

export const Database = () => (
    <Styles>
        <Container fluid>
            <Row><Title>Lunar Missions Database</Title></Row>
            <Row><Paragraph>
                
                This database is incomplete. You can help by <Link to="./Contribute">submitting missions,</Link> or <Link to="./Contribute">updating records</Link> with information regarding payloads, technologies, goals, objectives, funding, and more.
                <br></br>
                Missions with more complete data are being populated into the <Link to="./missions">Missions Database.</Link>
            
            </Paragraph></Row>
        </Container>
        <Container fluid>
                    <Iframe url = "https://airtable.com/embed/shrOGLTaTrTsP1auC?backgroundColor=gray&layout=card&viewControls=on" 
                    marginheight = "100px"
                    marginWidth = "100px"
                    width = "100%"
                    height = "1000"
                    frameBorder = "10px" />
        </Container>
    </Styles>
)
