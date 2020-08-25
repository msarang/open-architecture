import React from 'react';
import styled from 'styled-components';
import Moon from "./LOA_moon_transparent.png";

const BackgroundContainer = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #3A63B8 40%, rgba(58, 99, 184, 0.413693) 80%);
    justify-content: center;
`;

const Background = styled.img`
  max-height: 90vh;
  align-self: top;
`;

export default function MoonBackground() {
    return (
      <BackgroundContainer>    
        <Background src={Moon} />
      </BackgroundContainer>
    );
    }