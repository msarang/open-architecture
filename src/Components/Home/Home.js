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


      <Parallax pages={3} ref={ref => parallax = ref}>
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
              <a href="https://www.openlunar.org/library/lunar-mission-actor-analysis-open-information-architecture-for-international-collaboration" className="button button-white">READ OUR IAC PAPER HERE</a>
              <br></br>
              <br></br>
              <br></br>

              <h2 className="section-heading">Working together towards a shared lunar future</h2>
              <p className="explainer-text-two">
                In addition to serving as a database, tracking developments in the space industry and advancements in our understanding of lunar science, we aim to create a tool that will empower individuals
                to collaborate to achieve shared objectives and goals. LOA will serve as a first step – a place to share visions and goals for future lunar exploration. In an effort to uncover the diversity of 
                views and tacit knowledge that influences opinions and insights into developments in the space industry, we conducted a survey with senior members of the space industry to get their take on the next year, and decade,
                in lunar exploration. Explore their insights below.
              </p>

              <a href="https://msarang.github.io/collective-envisioning/#/" className="button button-white">EXPLORE 2021 IN LUNAR EXPLORATION</a>
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
