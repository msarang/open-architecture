import React from 'react';
import Title from './Title';
import NavItem from './NavItem';
import NavItemHash from './NavItemHash';
import './NavigationBar.css';

export const NavigationBar = () => (

    <div className="navigation-container">
        <div className="box-one"></div>
        <div className="box-two">
            <Title to ="/">
                Lunar Open Architecture
            </Title>
        </div>
        <div className="box-three">
            <NavItemHash to="./#About">ABOUT</NavItemHash>
            <NavItem to="./Database">DATABASE</NavItem>
            <NavItem to="./Roadmap">ROADMAP</NavItem>
            <NavItem to="./Contribute">SUBMIT A MISSION</NavItem>
            <NavItem to="/CE">2021 IN LUNAR EXPLORATION</NavItem>
        </div>
    </div>

)