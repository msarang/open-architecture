import React from 'react';
import {Container, Row, Card, Button, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.container-fluid {
    background-color: #F2F2F2;
    color: black;
}

.row {
    text-align: center;
    margin-left: 350px;
    margin-right: 350px;
    margin-top: 40px;
    margin-bottom: 100px;
}

.col {
    align-items: center;
}

`;

const ProjectBody = styled.p `
    font-size: 30px;
    font-color: Redirect;
    text-align: left;
}`

const Heading = styled.h2 `
    font-size: 70px;
}`

const Highlight = styled.p `
    background: rgba(0, 100, 500, 0.5);
    display: inline;

}`

export const Roadmap = () => (
    <Styles>
        <Container fluid>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
        </Container>
    </Styles>
)