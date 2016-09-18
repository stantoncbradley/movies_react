import React, { Component } from 'react'
import api from '../api'
import Movies from './Movies'

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
    }
  }

  componentDidMount() {
    api('movie/top_rated')
    .then(data => this.setState({
      moviesData: data.results,
    }))
    .catch(error => console.log('Error! ' + error) )
  }

  render() {
    return (
      <Movies moviesData={this.state.moviesData} pageTitle='Popular Movies' />
    )
  }
}

export default Popular;
