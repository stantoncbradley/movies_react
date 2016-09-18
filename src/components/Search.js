import React, { Component } from 'react'
import api from '../api'
import Movies from './Movies'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
    }
  }

  componentDidMount() {
    api('search/movie', {query: this.props.params['query']})
    .then(data => this.setState({
      moviesData: data.results,
    }))
    .catch(error => console.log('Error! ' + error) )
  }

  render() {
    return (
      <Movies
        moviesData={this.state.moviesData}
        pageTitle={`Results for ${this.props.params['query']}`}
      />
    )
  }
}

export default Search;
