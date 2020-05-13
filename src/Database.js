import React from 'react';
import Iframe from 'react-iframe'
import { Nav, Tab, Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.container-fluid {
    background-color: #F2F2F2;
    color: black;
    padding-top: 5%;
    padding-bottom: 10% ;
    padding-left: 5% ;
    padding-right: 10% ;
    margin-top: 0;

}

.tab-container {
    background-color: white;
}

.tab-container .row {
    background-color: white;
}

.nav-link {
    color: black;
    font: Roboto
}

`;

export const Database = () => (
    <Styles>
        <Container fluid>
        <Tab.Container defaultActiveKey="first">
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="first">Missions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="second">Mission Database</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Iframe url = "https://airtable.com/embed/shrdju3tMnyOxr3DF?backgroundColor=gray&viewControls=on" 
                    marginheight = "100px"
                    marginWidth = "100px"
                    width = "100%"
                    height = "1000"
                    frameBorder = "10px" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Iframe url = "https://airtable.com/embed/shrOGLTaTrTsP1auC?"
                    marginheight = "100px"
                    marginWidth = "100px"
                    width = "100%"
                    height = "1000"
                    frameBorder = "10px" />
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </Container>
    </Styles>
)
