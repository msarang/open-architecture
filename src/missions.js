import React, { Component } from 'react';
import {Card, Col, Row, Container, ListGroup, ListGroupItem} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.row {
  overflow-y: scroll;
}

`;

const StyledCard = styled(Card)`
  background-color: white;
  color: black;
  
  .title {
    color: blue;
    font-size: 20px;
    text-align: left;
  }
`;

const PaddedCol = styled(Col)`
  padding-right: 15px;
  padding-bottom: 20px;
  padding-top: 20px;
`;



export class Missions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appI0uYfEVGv7EH2Q/Table%201?api_key=keyGN0YMmpBLH08JS')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ missions: data.records });
    }).catch(err => {
      // Error :()
    });
  }

  render() {
    return (
      <Styles>
      <Container>
        <Row>
              {this.state.missions.map(mission => (
              <PaddedCol xs="4">
                <MissionCard {...mission.fields} />
              </PaddedCol>
              ))}
        </Row>
      </Container>
      </Styles>
    );
  }
}

const MissionCard = ({missionname, actor, program, missiontype, status, year, imageURL}) => (
  <StyledCard>
  <Card.Img variant="top" src={imageURL[0].url} alt="Movie poster" />
    <Card.Body>
      <Card.Title className="title">{missionname}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem key={actor}><b>Actor</b>: {actor}</ListGroupItem>
          <ListGroupItem key={actor+program}><b>Program</b>: {program}</ListGroupItem>
          <ListGroupItem key={actor+missiontype}><b>Mission Type</b>: {missiontype}</ListGroupItem>
          <ListGroupItem key={actor+status}><b>Status</b>: {status}</ListGroupItem>
          <ListGroupItem key={actor+year}><b>Year</b>: {year}</ListGroupItem>
        </ListGroup>
    </Card.Body>
    <Card.Footer><Card.Link href="#">See a problem? Suggest a change here.</Card.Link></Card.Footer>
  </StyledCard>
);
