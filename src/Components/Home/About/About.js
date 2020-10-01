import React from 'react';
import styled from 'styled-components';
import OLF from "./Logos/OLF.png";
import SEI from "./Logos/SEI.png";
import MIT from "./Logos/MIT-Logo-cut.png";
import './About.css';


const Text = styled.p`
    font-size: 40px;
    font-family: 'Palanquin', sans-serif;
    color: white;
    padding-bottom: 30px;
    line-height: 50px;

    @media (max-width: 700px) {
        font-size: 25px;
        line-height: 30px;
      }

`
const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  color: white;
`

export const About = () => (
<div className="about-container">

    <div className="row-container">
        <Text><b>This project is a collaboration between the MIT Media Lab’s Space Exploration Initiative and the Open Lunar Foundation</b></Text>
    </div>

    <div className="row-container">
        <div className="column-container">
            <img src={SEI} className="sei-logo" />
            <Paragraph>
                The MIT Media Lab's <b>Space Exploration Initiative’s</b> founding mission is to rigorously,
                vigorously build out the technologies of our sci-fi space future while
                keeping our innovations and team as open and
                accessible as possible. We’re democratizing access to space exploration in
                the context of our blue sky goal — to realize an inclusive, impactful Starfleet Academy. LOA development is led by 
                Lunar Exploration Projects Lead <a href="https://www.media.mit.edu/people/msarang/overview/">Mehak Sarang</a>.
            </Paragraph>
            <a href="https://www.media.mit.edu/groups/space-exploration/overview/" className="button button-white-two">LEARN MORE</a>
        </div>
        <div className="column-container">
            <img src={OLF} className="olf-logo" />
            <Paragraph>
                <b>Open Lunar Foundation</b> is helping to create a peaceful, cooperative future on 
                the Moon for all life. We work on policy and partnerships that support a 
                sustainable lunar settlement driven by open values.
            </Paragraph>
            <a href="https://www.openlunar.org/" className="button button-white-two">LEARN MORE</a>
        </div>
    </div>

</div>
    
);

