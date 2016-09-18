import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router'
import App from './App';
import Popular from './components/Popular';
import Search from './components/Search';
import Movie from './components/Movie';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Popular}/>
      <Route path="/search" component={Popular}/>
      <Route path="/search/:query" component={Search}/>
      <Route path="/movie/:id" component={Movie}/>
    </Route>
  </Router>
),document.getElementById('root')
);
