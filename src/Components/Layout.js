import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Div = styled.div`
    .container {
        background-color: black;
    }

`;

export const Layout = (props) => (
    <Div>
        <Container>
            {props.children}
        </Container>
    </Div>
)