import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Sections from './CEComponents/Sections';
import { Database } from './Database';
import { Roadmap } from './Roadmap';
import { Contribute } from './Contribute';
import { NavigationBar } from './Components/NavigationBar/NavigationBar';



class App extends Component {
 render() {
  return (
      <HashRouter basename="/">
        <NavigationBar />
          <Route exact path="/" component={Home}/>
          <Route path="/Database" component={Database} />
          <Route path="/Roadmap" component={Roadmap} />
          <Route path="/Contribute" component={Contribute} />
          <Route path="/CE" component={Sections} />
      </HashRouter> 
  );
}
}

export default App;
