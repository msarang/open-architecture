import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HashLink as AnotherLink } from 'react-router-hash-link';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

`;

const StyledLink = styled(Link)`
    color: white;
`;


export const NavigationBar = () => (
    <Styles>
    <Navbar fixed="top" expand="lg">
        <Nav className='mr-auto'>
        <Navbar.Brand><Link to="/">Lunar Open Architecture (LOA)</Link></Navbar.Brand>
            <Nav.Item>
                <Nav.Link>
                <Link to="./Database">Full Database</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                <Link to="./missions">Missions Database</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                <AnotherLink to="./#Team">About</AnotherLink>
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <Nav>
                <Nav.Link>
                    <StyledLink to="./Contribute"> <Button>Contribute to the Database</Button></StyledLink>
                </Nav.Link>
        </Nav>
    </Navbar>
</Styles>
)