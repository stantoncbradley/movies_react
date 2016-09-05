import React from 'react'
import { browserHistory } from 'react-router'
import api from '../api'
import NavLink from './NavLink'
import Movies from './Movies'


export default React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    // api(this.props.movieTitle)
    // .then(data => this.setState({data: data}) )
    // .catch(error => console.log('Error! ' + error) )
    this.setState({
      data: [
        {
          id: 1,
          title: 'Fight Club',
        },
        {
          id: 2,
          title: 'Jurassic Park',
        },
      ]
    })
  },
  render() {
    return (
      <div>
        <h2>Popular</h2>
        <Movies data={this.state.data} />
      </div>
    )
  }
})
