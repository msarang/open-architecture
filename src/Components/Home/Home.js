import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import MoonBackground from './MoonBackground';
import MainBox from './MainBox';
import { About } from './About/About';
import './Home.css';


export default function Home() {
  let parallax;
  return (
    <React.Fragment>
    <div className="section-one-container">
    <MoonBackground />


      <Parallax pages={1.9} ref={ref => parallax = ref}>
          <ParallaxLayer offset={0.1} speed={1}>
            <h1 className="title">We believe the future of lunar exploration should be open, shared, and collaborative.</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={0.8} speed={1}>

            <div className="section-two-container">
              <MainBox title="Explore the Lunar Database" text="+ See the missions that have flown, and will fly to the moon." link="./Database" />
              <MainBox title="Explore the Lunar Roadmap" text="+ See current objectives and technologies for lunar exploration." link="./Roadmap"/>
            </div>


            <div className="section-three-container">

              <h2 className="section-heading">Our Mission</h2>
              <p className="explainer-text-two">

              LOA is the first dynamic, living, and open roadmap for lunar exploration, 
              powered by an evolving database that captures and coalesces current and 
              future missions for lunar exploration.

              By tracking developments around the world in technologies, science
              industry, and policy, we hope to cultivate a participatory community to engage in collective
              decision making to reach shared objectives in lunar exploration. 
              </p>

              <a href="https://www.openlunar.org/library/architecting-our-shared-lunar-future" className="button button-white">READ OUR WHITEPAPER HERE</a>

            </div>

          </ParallaxLayer>

          <ParallaxLayer offset={1.3} speed={1}>
          
          </ParallaxLayer>
      </Parallax>


    </div>
    <a id="About"><About /></a>

</React.Fragment>
  );
}
