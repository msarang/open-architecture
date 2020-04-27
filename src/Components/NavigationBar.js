import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

    .nav-link {
        color: black;
        font: Roboto
    }
`;

export const NavigationBar = () => (
    <Styles>
    <Navbar fixed="top" expand="lg">
        <Nav className='mr-auto'>
            <Nav.Item><Nav.Link href="./Home">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href ="./Database">Database</Nav.Link></Nav.Item>
        </Nav>
    </Navbar>
</Styles>
)