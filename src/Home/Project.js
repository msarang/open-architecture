import React from 'react';
import {Container, Row, Card, Button, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
import Iframe from 'react-iframe';

const Styles = styled.div`
.container-fluid {
    background-color: #F2F2F2;
    color: black;
}

.col {
    background-color: white;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 100px;
    padding-bottom: 100px;
}

.row {
    text-align: left;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 100px;
    padding-left: 100px;
}
`;

const ProjectBody = styled.p `
    font-size: 20px;
    text-align: left;
}`

const Heading = styled.h2 `
    font-size: 50px;
    color: rgba(0, 100, 500, 0.8);
    padding-bottom: 20px;
}`

const Highlight = styled.p `
    background: rgba(0, 100, 500, 0.3);
    display: inline;

}`


export const Project = () => (
    <Styles>
        <Container fluid>
                    <Row>
                        <Col>
                            <Heading>Enabling a Sustainable Lunar Future</Heading>
                            <ProjectBody>
                                We're building the first <Highlight>dynamic, living, and open</Highlight> roadmap for lunar exploration, powered by an <Highlight>evolving</Highlight> database that captures and coalesces current and future lunar exploration missions.
                            </ProjectBody>
                        <Heading>Our Purpose</Heading>
                            <ProjectBody>
                                To collectively develop a <Highlight>sustainable</Highlight> vision for lunar development by developing a living database to track developments around the world
                                in technologies, science, industry, and policy that support lunar exploration. Identifying gaps and synergies towards achieving objectives 
                                that will unlock lunar exploration.
                            </ProjectBody>
                            <ProjectBody>
                                To <Highlight>engage the public</Highlight> by demistifying the space industry with a highly interactive, engaging, and easy-to-use tool.
                            </ProjectBody>
                            <ProjectBody>
                                Cultivate a <Highlight>participatory community</Highlight> to ultimately engage in collective decision-making to reach shared objectives by:
                                <ul>
                                <li>Encouraging user submissions to the database.</li>
                                <li>Developing modes of engagement of the website through forums, discussions, etc.</li>  
                                <li>Identifying leverage points between lunar actors.</li>
                                </ul>
                            </ProjectBody>
                        </Col>
                    </Row>
                <Row>
                <Iframe url="https://embed.kumu.io/cd8f6c712f6186539eff6c55c47a91e0" width="100%" height="600" frameborder="0"/>
                </Row>
        </Container>
    </Styles>
)