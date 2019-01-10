import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './visualizer/StreamCreate';
import StreamShow from './visualizer/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamCreate} />
            <Route path="/visualize" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
