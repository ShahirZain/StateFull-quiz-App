import React, { Component } from 'react';
import SignUp from './SignUp'
import Login from './login';
import TestToBeGiven from './TestToBeGiven';
import TestKey from './testKey';
import TestQuesJS1 from './testQuesJS1/testQuesJS1';
// import TestQuesJS2 from './testQuesJS2'
// import Result from './Result'

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/TestToBeGiven" component={TestToBeGiven} />
          <Route exact path="/TestToBeGiven/TestKey" component={TestKey} />
          <Route exact path="/TestToBeGiven/TestKey/TestQuesJS1" component={TestQuesJS1} />
          {/* <Route exact path="/TestToBeGiven/TestKey/TestQuesJS2" component={TestQuesJS2}/>
          <Route exact path="/TestToBeGiven/TestKey/TestQuesJS1/Result" component={Result} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
