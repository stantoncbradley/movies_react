import React from 'react'
import { browserHistory } from 'react-router'
import api from '../api'
import NavLink from './NavLink'
import Movies from './Movies'

const SEARCH_API_PATH = 'search/movie'

export default React.createClass({
  getInitialState: function() {
    return {movies: []};
  },
  componentDidMount: function() {
    api(SEARCH_API_PATH, {query: this.props.params.query})
    .then(data => this.setState({movies: data.results}) )
    .catch(error => console.log('Error! ' + error) )
  },
  render() {
    return (
      <div>
        <h2>{`Results for ${this.props.params.query}`}</h2>
        <Movies data={this.state.movies} />
      </div>
    )
  }
})
