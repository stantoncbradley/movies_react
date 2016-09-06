import React from 'react'
import { browserHistory } from 'react-router'
import api from '../api'
import NavLink from './NavLink'
import Movies from './Movies'

const POPULAR_API_PATH = 'movie/top_rated'

export default React.createClass({
  getInitialState: function() {
    return {movies: []};
  },
  componentDidMount: function() {
    api(POPULAR_API_PATH)
    .then(data => this.setState({movies: data.results}) )
    .catch(error => console.log('Error! ' + error) )
  },
  render() {
    return (
      <div>
        <h2>Popular</h2>
        <Movies data={this.state.movies} />
      </div>
    )
  }
})
