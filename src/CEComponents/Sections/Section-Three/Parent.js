import React from 'react';
import { Child } from './Child';
import { PieChartDisplayHeading } from './PieChartDisplayHeading';

export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '0' };
    
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {this.setState({name: newName});}
  
  render() {
    return (
        <div className="second-box">
          <Child onChange={this.changeName}/>
          <PieChartDisplayHeading name={this.state.name}/>
        </div>
    );
  }
};