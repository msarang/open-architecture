import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import {Database} from './Database';
import {Contribute} from './Contribute';
import {Missions} from './missions';
import { NavigationBar } from './Components/NavigationBar';
import { Container } from 'react-bootstrap';


class App extends Component {
 render() {
  return (
      <HashRouter basename="/">
        <NavigationBar />
          <Route exact path="/" component={Home}/>
          <Route path="/Database" component={Database} />
          <Route path="/Contribute" component={Contribute} />
          <Route path="/missions" component={Missions} />
      </HashRouter> 
  );
}
}

export default App;
