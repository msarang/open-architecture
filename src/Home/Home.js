import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import {Explore} from "./explore";
import {Team} from "./team";
import {Project} from "./Project";
import {Activities} from "./activities";

const Styles = styled.div`

.jumbotron {
    color: white;
    background-color: black;
    text-align: center;
    margin-bottom: 0;
}

.jumbotron h1 {
    font-size: 48px;
    font-color: #C4C4C4;
    padding-left: 30%;
    padding-right: 30%;}

.jumbotron p {
    font-size: 18px;
    padding-left: 35%;
    padding-right: 35%;
}
`;

export const Home = () => (
    <Styles>
        <Jumbotron fluid>
            <h1>Welcome to the Lunar Open Architecture Project</h1>
            <p>
            We believe the future of lunar exploration should be open, shared, and collaborative.
            </p>
        </Jumbotron>
        <Explore />
        <Activities />
        <Project />
        <Team />
    </Styles>

)