import React from 'react';
import {Card, ListGroup, Accordion, Button} from "react-bootstrap";
import './Section-One.css';
import { Example } from './Modal';

export const SectionOne = () => (
  <React.Fragment>              
  <div className="section-one-block">
        <Accordion>
        <Card style={{ width: '50%' }}>
          <Card.Header>According to 6 respondents, 2021 could be a turning point in lunar exploration</Card.Header>
          <Card.Body>The potential of a few commercial contracts could spell a new era of lunar exploration, led by NASA.</Card.Body>
          <Accordion.Toggle as={Button} eventKey="0" className="toggle">SEE THE RESPONSES</Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
          <ListGroup variant="flush">
            <ListGroup.Item> "The first <Example mission="commercial lunar landers " url="https://lunar-open-architecture.netlify.app/?search=NASA%2CAstrobotic&year=2021&group=program&mission=Peregrine%20Lander"></Example>should arrive in 2021. That's a breakthrough."</ListGroup.Item>
            <ListGroup.Item>"Every year can and should be a turning point. In 2021 specifically: 1) <Example mission="HLS award(s)" url="https://lunar-open-architecture.netlify.app/?viz=objectives&objective=Objective%20Sust-A-4"></Example> will be made, 2) NASA's direction for the next 4-12 years will clarify."</ListGroup.Item>
            <ListGroup.Item>"<Example mission="NASA's CLPS" url="https://lunar-open-architecture.netlify.app/?viz=objectives&objective=Objective%20Sust-A-4"></Example> program, and <Example mission="Artemis" url="https://lunar-open-architecture.netlify.app/?year=2021&group=program"></Example> to a larger extent, has been an enabler for a renewed interest in the Moon. With an upcoming election, it is important for those of us who support lunar exploration to be clear about the benefits of going to the Moon. We can learn there and build an economic and scientific engine that can create a global good. We can also use it as a stepping off point to go on to Mars."</ListGroup.Item>
            <ListGroup.Item>"How lunar exploration recovers after this year of COVID, with all the international aspirations that existed leading into 2020, will be critical to planning the next steps. Is our global resolve intact? The inspiration and hope embodied in space exploration is critical to the world as we are today. We need to press forward through 2020 and 2021 on our path to being interplanetary."</ListGroup.Item>
            <ListGroup.Item>"NASA will be under pressure to reduce investment in <Example mission="Artemis" url="https://lunar-open-architecture.netlify.app/?year=2021&group=program"></Example> due to pressure put on the federal budget as a result of COVID-19 relief spending. This presents an opportunity for NASA's commercial and academic partners to step up in new ways to keep the positive momentum going."</ListGroup.Item>
            <ListGroup.Item><b>POTENTIALLY</b> “[If we see] somewhat regular transportation to and from cislunar space and [the lunar] surface.”</ListGroup.Item>
          </ListGroup>
          </Accordion.Collapse>
        </Card>

        <Card style={{ width: '50%'}}>
          <Card.Header>5 respondents are less certain much progress will be made in lunar exploration in 2021 </Card.Header>
          <Card.Body>2021 might be another step, but not a critical turning point for enabling an increased presence on the lunar surface.</Card.Body>
          <Accordion.Toggle as={Button} eventKey="1" className="toggle">SEE THE RESPONSES</Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
          <ListGroup variant="flush">
            <ListGroup.Item> "There are many on-going efforts for lunar exploration, both robotically and manned.  These efforts in the US have been underway for several years, including the <Example mission="CLPS and Artemis program" url=""></Example>.  2021 will just be another year on the journey as NASA and other countries seek to move forward in this arena.  Even though it's not a turning point, we are heading towards more robotic and manned missions to the moon, and eventually a more permanent presence there."</ListGroup.Item>
            <ListGroup.Item>"Rather than 2021, I think 2024 or whenever the next <Example mission="human landing on the lunar surface" url="https://lunar-open-architecture.netlify.app/?viz=objectives&objective=Objective%20Sust-A-4"></Example> is accomplished will be a turning point."</ListGroup.Item>
            <ListGroup.Item>"At best we may see some small <Example mission="CLPS landers" url="https://lunar-open-architecture.netlify.app/?viz=objectives&objective=Objective%20Sust-A-4"></Example> in 2021, but I’m skeptical. Even if they do happen, it’s not clear how this is a turning point. To me a turning point is when there's an <Example mission="economic incentive for commercial companies" url=""></Example> to go to the Moon, at scale and continuously, where the funding capital is not from governments."</ListGroup.Item>
            <ListGroup.Item>"I think a turning point is coming soon, but I think it will hit a little later than 2021. Between the various <Example mission ="CLPS" url="https://lunar-open-architecture.netlify.app/?viz=objectives&objective=Objective%20Sust-A-4"></Example> providers, the <Example mission="Chang'e sample return" url="https://lunar-open-architecture.netlify.app/?search=Chang%27e%205&year=2030&mission=Chang%27e%205"></Example> missions, and some of the surviving Google Lunar XPRIZE competitors, there are a number of really exciting missions coming down the pipeline that have the potential to serve as that tipping point."</ListGroup.Item>
            <ListGroup.Item><b>NOT SURE</b> “The funding (VC and govt) environment is unclear given all the pandemic response. Will NASA actually be able to do what they have proposed?”</ListGroup.Item>
          </ListGroup>
          </Accordion.Collapse>
        </Card>
        </Accordion>
    </div>
    </React.Fragment>
)

