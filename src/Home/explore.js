import React from 'react';
import {Container, Row, Card, Button, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
import ImageOne from "./lunar_surface.png";
import ImageTwo from "./earthrise.jpg";
import {Link} from 'react-router-dom';

const Styles = styled.div`
.container-fluid {
    background-color: black;
}

.row {
    padding-left: 20%;
    padding-right: 20%;
    background-color: black;
}

.col {
    align-items: center;
    padding-bottom: 5%;
}

.card-imageoverlay {
    display: flex;
    flex-direction: column;
}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: end;
    padding-top: 40%;
}
`;


export const Explore = () => (
    <Styles>
        <Container fluid>
            <Row xs={2}>
                <Col>
                    <Card>
                        <Card.Img src={ImageTwo}/>
                        <Card.ImgOverlay>
                        <Card.Body>
                            <Button variant="primary">
                                <Link to ="./Database">
                                Explore the Database
                                </Link>
                                </Button>
                        </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img src={ImageOne}/>
                        <Card.ImgOverlay>
                        <Card.Body>
                            <Button variant="primary">Explore the Roadmap</Button>
                        </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
    </Container>
    </Styles>
)