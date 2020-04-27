import React from 'react';
import Iframe from 'react-iframe'
import { Container } from 'react-bootstrap';

export const Database = () => (
    <Container>
       <Iframe url = "https://airtable.com/embed/shrOGLTaTrTsP1auC?"
       marginHeight = "100px"
       marginWidth = "100px"
       width = "100%"
       height = "1000"
       style="border:1px solid lightgrey"
       />
    </Container>
)