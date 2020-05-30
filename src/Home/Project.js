import React from 'react';
import {Container, Row, Card, Button, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import {Link} from 'react-router-dom';

const Styles = styled.div`
.container-fluid {
    background-color: #F2F2F2; 
    position: relative;
    padding-top: 10%;
}

.col {
    background-color: white;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
    max-width: 90%;
}

.row {
    padding-bottom: 50px;
    justify-content: center;
}

`;

const ProjectBody = styled.p `
    font-family: 'Lato', sans-serif;
    color: black;
    text-align: left;
    font-size: 20px;
}`

const Heading = styled.h2 `
    color: black;
    font-family: 'Lato', sans-serif;
    font-size: 50px;
}`

const HeadingTwo = styled.h2 `
    font-family: 'Lato', sans-serif;    
    font-size: 60px;
    color: black;
    padding-bottom: 20px;
    text-align: center;
}`

const Highlight = styled.p `
    background: rgba(100,0,255, 0.1);
    display: inline;

}`

const StyledLink = styled(Link)`
    color: white;
`;


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
                    </Container>

                    <Container fluid>
                    <Row xs="2">
                        <Col>
                            <Heading>PHASE 01</Heading>
                            <ProjectBody>Help us build the first open source comprehensive database of lunar missions, as well as associated instruments and payloads,
                                technologies, investigation goals, and lunar exploration programs.
                            </ProjectBody>
                            <br />
                            <StyledLink to="./Database"><Button>Go to the Database</Button></StyledLink>
                        </Col>
                        <Col>
                            <Heading>PHASE 02</Heading>
                            <ProjectBody>
                                Powered by the database of lunar missions, we'll be releasing
                                the Open Lunar Architecture, revealing our roadmap towards lunar exploration.
                            </ProjectBody>
                            <br />
                            <br />
                            <Button>Coming Soon</Button>
                        </Col>
                    </Row>
                <Row xs="1">
                <HeadingTwo>Current Missions in the Database</HeadingTwo>
                </Row>
                <Row>
                <Iframe url="https://embed.kumu.io/cd8f6c712f6186539eff6c55c47a91e0" width="100%" height="600" frameborder="0"/>
                </Row>
        </Container>
                

    
    </Styles>
)