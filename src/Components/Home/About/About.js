import React from 'react';
import styled from 'styled-components';
import OLF from "./Logos/OLF.png";
import SEI from "./Logos/SEI.png";
import MIT from "./Logos/MIT-Logo-cut.png";
import './About.css';


const Text = styled.p`
    font-size: 20px;
    font-family: 'Palanquin', sans-serif;
    color: white;
    padding-bottom: 30px;

    @media (max-width: 700px) {
        font-size: 15px;
      }

`

const TextTwo = styled.p`
    font-size: 20px;
    font-family: 'Cabin', sans-serif;
    color: white;

`
const TextThree = styled.p`
    font-size: 20px;
    font-family: 'Cabin', sans-serif;
    color: white;

`
const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  text-align: left;
  color: white;
`
const Logos = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: space-around;
`;
const MITlogo = styled.img`
    display: flex;
    max-width: 100px;
    height: auto;
    margin-right: 5px;
    padding-bottom: 10px;
`;

const SEIlogo = styled.img`
    display: flex;
    max-width: 200px;
    height: auto;
    padding-bottom: 10px;
`;
const OLFlogo = styled.img`
    display: flex;
    max-width: 250px;
    height: auto;
`;


export const About = () => (
<div className="about-container">

    <div className="row-container">
        <Text><b>This project is a collaboration between the MIT Media Lab’s Space Exploration Initiative and the Open Lunar Foundation</b></Text>
        <Logos>
        <MITlogo src={MIT} />
        <SEIlogo src={SEI} />
        <OLFlogo src={OLF} />
        </Logos>
    
    </div>

    <div className="row-container">
        <TextTwo>MIT Media Lab Space Exploration Initiative</TextTwo>
        <Paragraph>
            The Space Exploration Initiative’s founding mission is to rigorously,
            vigorously build out the technologies of our sci-fi space future while
            keeping our innovations and team as open and
            accessible as possible. We’re democratizing access to space exploration in
            the context of our blue sky goal — to realize an inclusive, impactful Starfleet Academy.
        </Paragraph>
        <a href="https://www.media.mit.edu/groups/space-exploration/overview/" className="button button-white-two">LEARN MORE</a>
        <TextThree>Open Lunar Foundation</TextThree>
        <Paragraph>
            Open Lunar Foundation is helping to create a peaceful, cooperative future on 
            the Moon for all life. We work on policy and partnerships that support a 
            sustainable lunar settlement driven by open values.
        </Paragraph>
        <a href="https://www.openlunar.org/" className="button button-white-two">LEARN MORE</a>
    </div>

</div>
    
);

