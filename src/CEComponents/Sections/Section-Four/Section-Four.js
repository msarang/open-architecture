import React from 'react';
import {Card, ListGroup, CardGroup} from "react-bootstrap";

export const SectionFour = () => (
  <div className="section-four">
      <h2 className="heading-two">What do you hope to see happen in 2021 that seems unlikely at the moment? What would it take to make that a possibility?</h2>
      <CardGroup style={{width:'100%'}}>

        <Card style={{ width: 'auto' }}>
          <ListGroup variant="flush">
            <ListGroup.Item> "Full funding for NASA Artemis program to get US astronauts back to the moon by 2024. Would require full Congressional support and the recognition of the importance to the nation."</ListGroup.Item>
            <ListGroup.Item>"Congressional appropriations. The actual work needs to get started and funding sources are require"</ListGroup.Item>
            <ListGroup.Item>"Launch of CAPSTONE; I believe this is indeed planned for 2021, but I am skeptical. Also: some continuity in NASA's exploration plans, which is always in doubt following any presidential election."</ListGroup.Item>
            <ListGroup.Item>"I'd like to see NASA double down on CLPS - providing assistance and promotion beyond what they are already doing. NASA has been too "hands-off" with CLPS."</ListGroup.Item>
            <ListGroup.Item>"Discovery of water bonded to regolith below the surface (similar to Mars). I think we need a pretty good digger and experiment suite to show that and it's just not going to fit on a CLPS mission by then."</ListGroup.Item>
            <ListGroup.Item>"An orbital flight of the SpaceX Starship. This would both point to a market in space for lunar water, and be a big step toward extracting the water in big enough quantities to interest business."</ListGroup.Item>      
            <ListGroup.Item>"1. Democratic Administration doubles down on lunar development. 2. Starship/SuperHeavy works."</ListGroup.Item>    
          </ListGroup>
        </Card>

      </CardGroup>

      
    </div>
)

