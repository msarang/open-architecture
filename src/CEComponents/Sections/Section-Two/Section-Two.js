import React from 'react';
import {Card, Carousel, ListGroup, ListGroupItem} from 'react-bootstrap';
import Iframe from 'react-iframe';
import './Section-Two.css';


export const SectionTwo = () => (
    <div className="section-two-wrapper">
      <h2 className="heading-two">Which upcoming or recent missions stand out in particular?</h2>
      <Carousel>
        <Carousel.Item>
          <Card className="section-two-card">
            <Card.Body className="section-two-card-body">
              <Iframe url={"https://lunar-open-architecture.netlify.app/?year=2030&mission=Chang%27e%204%20and%20Yutu%202"}
                      width="1000px"
                      height="450px"
                      id="myId"
                      className="iframe-carousel"
                      display="initial"
                      />
              <ListGroup className="list-group-flush">
              <ListGroupItem>"Recent--China's landing and exploration with their rover."</ListGroupItem>
              <ListGroupItem>"The Chang'e missions have not captured the public imagination here in the West but have been a steady cadence of technical maturation and progress."</ListGroupItem>
              <ListGroupItem>"Change'4 brought about the idea that the Moon has (or should have) some exploration value."</ListGroupItem>
            </ListGroup>
            </Card.Body>
          </Card>
        </Carousel.Item>


         <Carousel.Item>
          <Card className="section-two-card">
            <Card.Body className="section-two-card-body">
              <Iframe url={"https://lunar-open-architecture.netlify.app/?year=2028&mission=Beresheet&search=Beresheet"}
                      width="1000px"
                      height="500px"
                      id="myId"
                      className="iframe-carousel"
                      display="initial"
                      />
              <ListGroup className="list-group-flush">
              <ListGroupItem>"Beresheet was remarkable for showing that a smaller team from outside of the major space exploration nations could touch the surface of the Moon."</ListGroupItem>
              <ListGroupItem>"Israel's attempts to land on the moon."</ListGroupItem>
            </ListGroup>
            </Card.Body>
          </Card>
        </Carousel.Item>     

        <Carousel.Item>
          <Card className="section-two-card">
            <Card.Body className="section-two-card-body">
              <Iframe url={"https://lunar-open-architecture.netlify.app/?viz=objectives&objective=Objective%20Sust-A-4"}
                      width="1000px"
                      height="300px"
                      id="myId"
                      className="iframe-carousel"
                      display="initial"
                      />
              <ListGroup className="list-group-flush">
              <ListGroupItem>"The CLPS program seems to have brought some political and economic viability to what was already a technically exciting field of scrappy entrepreneurs."</ListGroupItem>
              <ListGroupItem>"CLPS is important in changing how the government contracts, especially if they scale up to larger landers actually capable of supporting industry, rather than just tiny science experiments. NASA abandoning Gateway for HLS was also important as it’s a waste of time and money and a distraction"</ListGroupItem>
              <ListGroupItem>"The upcoming CLPS missions are exciting and we (led by NASA) need to do everything we can to ensure that two or more CLPS providers are successful. We need competition. Private industry can support CLPS by buying payload space, or a complete mission."</ListGroupItem>
              <ListGroupItem>"Future...commercial capability for landing through the NASA CLPS program"</ListGroupItem>
            </ListGroup>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="section-two-card">
            <Card.Body className="section-two-card-body">
              <Iframe url={"https://lunar-open-architecture.netlify.app/?viz=objectives&objective=Objective%20Sci-A-3"}
                      width="1000px"
                      height="550px"
                      id="myId"
                      className="iframe-carousel"
                      display="initial"
                      />
              <ListGroup className="list-group-flush">
              <ListGroupItem>"Mapping of lunar resources by numerous missions that shows the Moon is not just "magnificent desolation" and points would be miners where to prove the ore bodies."</ListGroupItem>
            </ListGroup>
            </Card.Body>
          </Card>
        </Carousel.Item>

    </Carousel>

 
    </div>
)

