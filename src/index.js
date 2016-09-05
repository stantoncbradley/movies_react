import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Popular from './components/Popular'
import Search from './components/Search'
// import Movie from './modules/Movie'
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Popular}/>
      <Route path="/search/:query" component={Search}/>
      {//<Route path="/movies/:id" component={Movie}/>
}
    </Route>
  </Router>
),document.getElementById('root')
);
