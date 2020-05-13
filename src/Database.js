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
                    <Iframe url = "https://airtable.com/embed/shrOGLTaTrTsP1auC?backgroundColor=gray&layout=card&viewControls=on" 
                    marginheight = "100px"
                    marginWidth = "100px"
                    width = "100%"
                    height = "1000"
                    frameBorder = "10px" />
        </Container>
    </Styles>
)
