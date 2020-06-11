import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';
import Moon from "./Moon.png";
import {About} from './About';
import { Link } from 'react-router-dom';
import {HashLink as AnotherLink } from 'react-router-hash-link';

const Container = styled.div`
    display: flex;
    height: 100vh;  
    width: 100%;
    justify-content: center;
    align-items; flex-end;
`;


const BackgroundContainer = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180.36deg, #0942A9 27.86%, #7A91BB 99.61%);;
    justify-content: center;
`;

const Background = styled.img`
  max-height: 40vh;
  align-self: center;
  opacity: 0.7;
`;


const Title = styled.h1`
  font-family: 'Palanquin Dark', sans-serif;
  font-size: 45px;
  text-align: center;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 30px;
  color: white;

  @media (max-width: 700px) {
    font-size: 35px;
  }
`

const LastTitle = styled.h1`
  font-family: 'Palanquin Dark', sans-serif;
  font-size: 50px;
  text-align: center;
  color: black;
  margin-bottom: 2%;

  @media (max-width: 700px) {
    font-size: 35px;
  }
`
const SubTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  padding-left: 20vw;
  padding-right: 20vw;
  color: white;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`
const ParallaxLayerFlex = styled(ParallaxLayer)`
  display: flex;

`
const FinalText = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: center;
  flex-direction: column;
`

const LOAText = styled.p`
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  color: white;
  align-self: center;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`

const LOATextwhite = styled.p`
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  color: white;
  background: #0942A9;
  display: inline;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-grow: 1;
  align-self: center;
`

const StyledButton = styled(Link)`
  background-color: white;
  font-family: 'Roboto Mono', monospace;
  color: #0942A9;
  font-decoration: none;
  border-style: solid;
  border-color: #0942A9;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: max-content;
  border-radius: 10px;
  align-self: center;
  margin-right: 20px;
  text-decoration: none;
  width: 200px;

    &:hover {
      background-color: #0942A9;
      color: white;
    }

    @media (max-width: 700px) {
      width: 150px;
    }
`
const StyledButtonTwo = styled(AnotherLink)`
  background-color: white;
  font-family: 'Roboto Mono', monospace;
  color: #0942A9;
  font-decoration: none;
  border-style: solid;
  border-color: #0942A9;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: max-content;
  border-radius: 10px;
  align-self: center;
  margin-right: 20px;
  text-decoration: none;
  width: 200px;

    &:hover {
      background-color: #0942A9;
      color: white;
    }

    @media (max-width: 700px) {
      width: 150px;
    }
`
const Missions = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  align-items: center;

`


export default function Home() {
  let parallax;
  return (
    <React.Fragment>
      
    <Container>
      <BackgroundContainer>    
        <Background src={Moon} />
      </BackgroundContainer>

      <Parallax pages={2} ref={ref => parallax = ref}>
          <ParallaxLayer offset={0.1} speed={1}>
            <Title>Welcome to the Lunar Open Architecture Project</Title>
            <SubTitle>We believe the future of lunar exploration should be open, shared, and collaborative.</SubTitle>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={0.1}>

            <Title>Making a sustainable return to the Moon will require collaboration</Title>

          </ParallaxLayer>  

          <ParallaxLayer offset={1.4} speed={2}>  

        
            <LOAText>
                The Lunar Open Architecture (LOA) is the first <LOATextwhite>dynamic, living, and open roadmap</LOATextwhite> for lunar exploration, powered by an<LOATextwhite> evolving, crowd-sourced, database</LOATextwhite>  that
                captures and coalesces current and future <LOATextwhite>visions for 
                lunar exploration.</LOATextwhite>
            </LOAText>
          </ParallaxLayer>

          <ParallaxLayerFlex offset={1.3} speed={0}>
              <FinalText>

              <Buttons>
                <StyledButton to="./Database">Explore the Database</StyledButton>
                <StyledButtonTwo to="./#Missions">Explore Missions in the Database</StyledButtonTwo>
              </Buttons>
              </FinalText>

          </ParallaxLayerFlex>
      </Parallax>
    </Container>
    
    <Missions>
    <a id="Missions"><LastTitle>Current Missions in the Database</LastTitle></a>
      <iframe src="https://embed.kumu.io/cd8f6c712f6186539eff6c55c47a91e0" width="80%" height="600" frameborder="0"></iframe>
    </Missions>
    <a id="About"><About /></a>
    </React.Fragment>

  );
}
