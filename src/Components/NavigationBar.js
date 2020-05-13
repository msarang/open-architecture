import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

`;

export const NavigationBar = () => (
    <Styles>
    <Navbar fixed="top" expand="lg">
        <Nav className='mr-auto'>
            <Nav.Item><Nav.Link href="./Home">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href ="./Database">Database</Nav.Link></Nav.Item>
        </Nav>
        <Nav>
            <Button><Nav.Link href="./Contribute">Contribute to the Database</Nav.Link></Button>
        </Nav>
    </Navbar>
</Styles>
)