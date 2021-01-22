import React from 'react';
import {Container, Row, Navbar} from 'react-bootstrap';
import './Sections.css';
import { Hero } from './Hero/Hero';
import { SectionOne } from './Sections/Section-One/Section-One';
import { SectionTwo } from './Sections/Section-Two/Section-Two';
import { SectionThree } from './Sections/Section-Three/Section-Three';
import { SectionFour } from './Sections/Section-Four/Section-Four';

export default function Sections() {
  return (
    <Container fluid className="background">
      
      <Row>
        <Hero />
      </Row>

      <Row>
        <SectionOne />
      </Row>

      <Row> 
        <SectionTwo />
      </Row>

      <Row>       
        <SectionThree />
      </Row>

      <Row>
        <SectionFour/>
      </Row>
    </Container>
  );
}