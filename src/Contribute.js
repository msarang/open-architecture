import React from 'react';
import Iframe from 'react-iframe'
import { Tabs, Tab, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.container {
    padding-top: 15px;
}
`;

export const Contribute = () => (
<Styles>
    <Container>
        <Tabs defaultActiveKey="newmission" id="uncontrolled-tab-example">
            <Tab eventKey="newmission" title="Submit a New Mission">
                <Iframe url = "https://airtable.com/embed/shr3w3GwsY2vTYOw2?backgroundColor=gray"
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "1000"
                            frameBorder = "10px" />
            </Tab>
            <Tab eventKey="suggestion" title="Suggest an Edit">
                <Iframe url ="https://airtable.com/embed/shruDDalHMaFMCOlQ?backgroundColor=gray"
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "1000"
                            frameBorder = "10px" />
            </Tab>
            <Tab eventKey="updates" title="Sign up for Project Updates">
                <Iframe url ="https://docs.google.com/forms/d/e/1FAIpQLSfoyk_JZuw415Qo65K80FPPJmJqKH2jdj8N2aC2SyCvHimP-w/viewform?embedded=true" 
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "1000"
                            frameBorder = "10px" />
            </Tab>
        </Tabs>
    </Container>
</Styles>
)

