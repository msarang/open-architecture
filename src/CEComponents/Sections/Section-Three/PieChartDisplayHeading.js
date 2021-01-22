import React from 'react';
import { Image } from 'react-bootstrap';
import exploration from './charts/exploration.png';
import launch from './charts/launch.png';
import surfaceSettlement from './charts/surfaceSettlement.png';
import surfaceMobility from './charts/surfaceMobility.png';
import gateway from './charts/gateway.png';
import crew from './charts/crew.png';
import power from './charts/power.png';


export class PieChartDisplayHeading extends React.Component {
  render() {

    const propsData = [
      {
          id: 'exploration',
          text: 'We should prioritize___ as the next exploration destination',
          imageURL: exploration,
      },
      {
        id: 'launch',
        text: "We should prioritize _____ launch vehicle systems.",
        imageURL: launch,
      },
      {
        id: 'surfaceSettlement',
        text: "We should prioritize ____ on the lunar surface.",
        imageURL: surfaceSettlement,
      },
      {
        id: "surfaceMobility",
        text: "We should prioritize _____ lunar surface mobility.",
        imageURL: surfaceMobility,
      },
      {
        id: "gateway",
        text: "The Lunar Gateway is ____ for sustainable lunar settlement.",
        imageURL: gateway,
      },
      {
        id: "crew",
        text: "The ideal crew size for near-term missions is ____.",
        imageURL: crew,
      },
      {
        id: "power",
        text: "____ should be our surface power priority.",
        imageURL: power,
      },
    ]
    
    var name = this.props.name
    console.log(propsData[name].id)

    return (
      <div>
        <h1 className="heading-two"> {propsData[name].text}</h1>
        <div className="pie-chart-container">
          <Image src={propsData[name].imageURL} className="pie-chart" fluid />
          </div>
      </div>
    );
  }
  }