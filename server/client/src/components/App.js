import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import RenderInput from './visualizer/RenderInput';
import RenderOutput from './visualizer/RenderOutput';
import QuickReference from './QuickReference';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={RenderInput} />
            <Route path="/visualize" exact component={RenderOutput} />
          </Switch>
          <QuickReference />
        </div>
      </Router>
    </div>
  );
};

export default App;
