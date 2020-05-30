import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HashLink as AnotherLink } from 'react-router-hash-link';
import OLF from "./OLF.png";
import SEI from "./SEI.png";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    flex-wrap: wrap;
    background-color: #422793;
    align-content: center;
`;

const Logos = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-self: flex-start;
`;

const SEIlogo = styled.img`
    display: flex;
    width: 140px;
    height: 60px;
`;
const OLFlogo = styled.img`
    display: flex;
    width: 230px;
    height: 60px;
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
    color: white;
    font-decoration: none;
`;

const LiTwo = styled(AnotherLink)`
    padding: 1rem;
    font-family: 'Roboto Mono', monospace;
    color: white;
    font-decoration: none;
`;



export const NavigationBar = () => (

    <Container>
            <Link to ="/">
                <Logos>
                    <SEIlogo src={SEI} />
                    <OLFlogo src={OLF} />
                </Logos> 
            </Link>
            <Ul>
                <LiTwo to="./#About">About the Project</LiTwo>
                <Li to="./Database">Database</Li>
                <Li to="./Contribute"><b>Contribute</b></Li>
                
            </Ul>
    </Container>
)