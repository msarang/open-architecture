import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';
import Moon from "./Moon.png";
import {About} from './About';
import { Link } from 'react-router-dom';

const BigContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items; center;
    flex-direction: column;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180.36deg, #422793 29.16%, #AF9EAF 99.61%);
`;

const Background = styled.img`
  max-height: 40vh;
  align-self: center;
  margin-top: 25vh;
`;

const Title = styled.h1`
  font-family: 'Palanquin', sans-serif;
  font-size: 50px;
  text-align: center;
  padding-left: 20vw;
  padding-right: 20vw;
  color: white;
`
const SubTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-align: center;
  padding-left: 20vw;
  padding-right: 20vw;
  color: white;
`
const ParallaxLayerFlex = styled(ParallaxLayer)`
  display: flex;
`
const FinalText = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`
const LOAText = styled.p`
  font-size: 40px;
  font-family: 'Palanquin', sans-serif;
  color: white;
  align-self: center;
  padding-right: 200px;
  padding-left: 100px;
`
const LOATextwhite = styled.p`
  font-size: 40px;
  font-family: 'Palanquin', sans-serif;
  color: white;
  background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #422793 50%);
  display: inline;
`
const StyledButton = styled(Link)`
  background-color: white;
  font-family: 'Roboto Mono', monospace;
  color: #422793;
  font-decoration: none;
  border-style: solid;
  border-color: #422793;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: max-content;
  border-radius: 10px;
  align-self: center;
  margin-right: 20px;
  text-decoration: none;
  width: 500px;

    &:hover {
      background-color: #422793;
      color: white;
    }
`

export default function Home() {
  let parallax;
  return (
    <React.Fragment>
      
    <BigContainer>
      <ImageContainer>    
        <Background src={Moon} />
      </ImageContainer>

      <Parallax pages={2.6} ref={ref => parallax = ref}>
          <ParallaxLayer offset={0} speed={10}>
            <Title>Welcome to the Lunar Open Architecture Project</Title>
          </ParallaxLayer>

          <ParallaxLayer offset={0.7} speed={2}>
              <SubTitle>We believe the future of lunar exploration should be open, shared, and collaborative.</SubTitle>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0.98} speed={2}>
            <Title>Making a sustainable return to the Moon will require collaboration.</Title>
          </ParallaxLayer>

          <ParallaxLayer offset={0.98} speed={0.3}>
            <SubTitle>
            Unlike during the Apollo era, there are more actors than ever before, 
            coming from around the world, in the public and private sector, 
            interested in making a return to the Moon. We’ll need to collaborate to do basic 
            science and develop essential technologies, while establishing key policies and 
            figuring out the economics to get there, and stay this time.
            </SubTitle>
          </ParallaxLayer>

          <ParallaxLayerFlex offset={1.4} speed={0}>
              <FinalText>
                <LOAText>LOA is the first <LOATextwhite>dynamic, living, and open roadmap</LOATextwhite> for lunar exploration, powered by an<LOATextwhite> evolving database</LOATextwhite>  that
                captures and coalesces current and future <LOATextwhite>visions for 
                lunar exploration.</LOATextwhite> 
                </LOAText>
                <StyledButton to="./Database">Explore the Database</StyledButton>
                <StyledButton>Explore the Roadmap</StyledButton>
              </FinalText>

          </ParallaxLayerFlex>
      </Parallax>
    </BigContainer>
    <a id="About"><About /></a>
    </React.Fragment>

  );
}
