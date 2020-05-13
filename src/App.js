import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './Home/Home';
import {Database} from './Database';
import {Contribute} from './Contribute';
import {NoMatch} from './NoMatch';
import { NavigationBar } from './Components/NavigationBar';

class App extends Component {
 render() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Database" component={Database} />
          <Route exact path="/Contribute" component={Contribute} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

export default App;
