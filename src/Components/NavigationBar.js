import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
            <Nav.Item>
                <Nav.Link>
                <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
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
        </Nav>
        <Nav>
            <Button>
                <Nav.Link>
                    <StyledLink to="./Contribute">Contribute to the Database</StyledLink>
                </Nav.Link>
            </Button>
        </Nav>
    </Navbar>
</Styles>
)