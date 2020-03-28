import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import Analytics from './Components/Analytics';
import Actions from './Components/Actions';
import Clients from './Components/Clients';

@inject("clientsData")
@observer
class App extends Component {
  constructor(){
    super()
    this.state = {
      clients: []
    }
  }

  
  render() {
    return (
      <Router>
        <Header />
        <div className="mainRoutes">
          <Route exact path="/" render={() =>
            <div> Home</div>} />
          <Route path="/client" exact component={Clients} />
          <Route path="/actions" exact component={Actions} />
          <Route path="/analytics" exact component={Analytics} />
        </div>
      </Router >
    );
  }
}
export default App;
