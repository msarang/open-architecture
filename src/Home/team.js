import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.container-fluid {
    background-color: #F2F2F2;
    color: black;
    padding-top: 5%;
    padding-bottom: 10% ;
    padding-left: 5% ;
    padding-right: 10% ;


}

.row {
    padding-right: 10px;
}

.col {
    padding-right: 80px;
    padding-top: 50px;
}

.col h1 {
    text-align: initial;
}

.col p {
    text-align: initial;
    padding-top: 20px;
    padding-bottom: 20px;
}

.col h2 {
    text-align: initial;
}

.image {

}

`;

export const Team = () => (
    <Styles>
        <Container fluid>
        <Row xs="2">
            <Col className="partners">
                <h1>This project is a partnership between the MIT Media Lab's Space Exploration Initiative and Open Lunar Foundation.</h1>
            </Col>
            <Col className="SEI">
                <h2>MIT Media Lab Space Exploration Initiative</h2>
                <p>
                The Space Exploration Initiative’s founding mission is to rigorously, vigorously build out the 
                technologies of our sci-fi space future while keeping our innovations and team as open and accessible as possible. 
                We’re democratizing access to space exploration in the context of our blue sky goal — to realize an inclusive,
                impactful Starfleet Academy.
                </p>
                <Button href="https://www.media.mit.edu/groups/space-exploration/overview/">Learn More</Button>
            </Col>
            <Col><br></br></Col>
            <Col className="OL">
                <h2>Open Lunar Foundation</h2>
                <p> The Open Lunar Foundation is...</p>
                <Button href="https://www.openlunar.org/">Learn More</Button>
                
            </Col>
      </Row>
        </Container>
    </Styles>
)