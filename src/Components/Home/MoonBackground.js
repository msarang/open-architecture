import React from 'react';
import styled from 'styled-components';
import Moon from "./LOA_moon_transparent.png";

const BackgroundContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #3A63B8 40%, rgba(58, 99, 184, 0.413693) 80%);
    justify-content: center;
`;

const Background = styled.img`
  max-width: 100%;
  height: 100vh;
  align-self: top;
  object-fit: contain;
`;

export default function MoonBackground() {
    return (
      <BackgroundContainer>    
        <Background src={Moon} />
      </BackgroundContainer>
    );
    }