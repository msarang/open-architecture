import React from 'react';
import Iframe from 'react-iframe'
import './Roadmap.css';

export const Roadmap = () => (
    <React.Fragment>
        <div className="intro-text">
        <h2 className="second-title">Lunar Exploration Roadmap</h2>
        <p className="explainer-text-two">
        Technologies in the database have been mapped to the <a href="https://www.lpi.usra.edu/leag/roadmap/">Lunar Exploration Roadmap</a>, prepared by the <a href="https://www.lpi.usra.edu/leag/">Lunar Exploration Analysis Group (LEAG)</a>.
        </p>
            <p className="explainer-text-two">As described by LEAG, the Roadmap identifies three thematic areas:</p>
            <ul className="explainer-text-two">
            <li><b> Feed Forward </b> has been coordinated with the Mars Exploration Program Analysis Group, and represents objectives that feed into Mars exploration.</li>
            <li><b> Sustainability </b> is at the lowest fidelity, representing a small (but growing) body of opinion and knowledge, and will require further refinements.</li>
            <li><b> Science </b> has a long heritage of study, and represents community consensus.</li>
            </ul>
            <p className="explainer-text-two">The thematic areas have associated objectives. <b>Hover</b> to see the objective, and <b>click</b> to see associated investigations, including
            technologies and missions.
            </p>
        </div>
        <Iframe url = "https://lunar-open-architecture.netlify.app/?viz=objectives?"
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "90%"
                            border = "none" />

</React.Fragment>
)
