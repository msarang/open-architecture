import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HashLink as AnotherLink } from 'react-router-hash-link';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    flex-wrap: wrap;
    background-color: #0942A9;
    align-content: center;
`;

const Ul = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`
const Li = styled(Link)`
    padding: 1rem;
    font-family: 'Roboto Mono', monospace;
    color: 	rgb(255, 255, 255, 0.7);

    &:hover {
        color: rgb(255, 255, 255);
    }
`;

const LiTwo = styled(AnotherLink)`
    padding: 1rem;
    font-family: 'Roboto Mono', monospace;
    color: 	rgb(255, 255, 255, 0.7);
    font-decoration: none;

    &:hover {
        color: rgb(255, 255, 255);
    }
`;



export const NavigationBar = () => (

    <Container>
            <Li to ="/">
                Lunar Open Architecture (LOA)
            </Li>
            <Ul>
                <LiTwo to="./#About">About</LiTwo>
                <Li to="./Database">Database</Li>
                <Li to="./Contribute">Contribute</Li>
            </Ul>
    </Container>
)