import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from './Home';
import {Database} from './Database';
import {NoMatch} from './NoMatch';
import {Layout} from './Components/Layout';
import Nav, { NavigationBar } from './Components/NavigationBar';
import styled from 'styled-components';

const Body = styled.body`
  font: roboto;
  background: black;
}
`;

class App extends Component {
 render() {
  return (
    <React.Fragment>
      <Body>
      <Layout>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Database" component={Database} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
      </Body>
    </React.Fragment>
  );
}
}

export default App;
