import React from 'react';
import styled from 'styled-components';

const BigContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-items: space-evenly;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    overflow-y: auto;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 40px;

`;

const Text = styled.p`
    font-size: 20px;
    font-family: 'Palanquin', sans-serif;
    color: white;
    flex-grow: 1;

    @media (max-width: 700px) {
        font-size: 15px;
      }

`

const TextTwo = styled.p`
    font-size: 20px;
    font-family: 'Palanquin', sans-serif;
    color: white;

`
const TextThree = styled.p`
    font-size: 20px;
    font-family: 'Palanquin', sans-serif;
    color: white;

`
const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  text-align: left;
  color: white;
`

const StyledButton = styled.a`
  background-color:  #0942A9;
  font-family: 'Roboto Mono', monospace;
  color:white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 50px;
  border-style: solid;
  border-color: #0942A9;
  border-width: 2px;
  border-radius: 10px;
  width: max-content;
  text-decoration: none;

    &:hover {
      background-color:white ;
      color: #0942A9;

    }

`


export const About = () => (
<BigContainer>

    <Container>
        <Text><b>This project is a collaboration between the MIT Media Lab’s Space Exploration Initiative and the Open Lunar Foundation</b></Text>
    </Container>

    <Container>
        <TextTwo>MIT Media Lab Space Exploration Initiative</TextTwo>
        <Paragraph>
            The Space Exploration Initiative’s founding mission is to rigorously,
            vigorously build out the technologies of our sci-fi space future while
            keeping our innovations and team as open and
            accessible as possible. We’re democratizing access to space exploration in
            the context of our blue sky goal — to realize an inclusive, impactful Starfleet Academy.
        </Paragraph>
        <StyledButton href="https://www.media.mit.edu/groups/space-exploration/overview/">Learn More</StyledButton>
        <TextThree>Open Lunar Foundation</TextThree>
        <Paragraph>
            Open Lunar Foundation is helping to create a peaceful, cooperative future on 
            the Moon for all life. We work on policy and partnerships that support a 
            sustainable lunar settlement driven by open values.
        </Paragraph>
        <StyledButton href="https://www.openlunar.org/">Learn More</StyledButton>
    </Container>

</BigContainer>
    
);