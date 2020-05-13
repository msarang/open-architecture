import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css';
import {Home} from './Home/Home';
import {Database} from './Database';
import {Contribute} from './Contribute';
import {Technologies} from './missions';
import { NavigationBar } from './Components/NavigationBar';

class App extends Component {
 render() {
  return (
    <React.Fragment>
      <HashRouter basename="/">
        <NavigationBar />
          <Route exact path="/" component={Home}/>
          <Route path="/Database" component={Database} />
          <Route path="/Contribute" component={Contribute} />
          <Route path="/missions" component={Technologies} />
      </HashRouter> 
    </React.Fragment>
  );
}
}

export default App;