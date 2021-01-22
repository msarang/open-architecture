import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

export class Child extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
        <ButtonGroup vertical className="button-list-group" onClick={this.handleChange}>
            <Button 
            value="0"
            className="list-button">
              Exploration Destinations
            </Button>

            <Button 
            value="1"
            className="list-button">
              Launch Vehicle Systems
            </Button>

            <Button 
            value="2"
            className="list-button">
              Sorties vs. Settlements
            </Button>

            <Button 
            value="3"
            className="list-button">
              Lunar Surface Mobility
            </Button>

            <Button 
            value="4"
            className="list-button">
              Lunar Gateway
            </Button>

            <Button 
            value="5"
            className="list-button">
              Crew Size
            </Button>

            <Button 
            value="6"
            className="list-button">
              Power Systems
            </Button>

        </ButtonGroup>
    );
  }
}