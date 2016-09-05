import React from 'react'
import { browserHistory } from 'react-router'
import api from '../api'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
      <ul>
        {this.props.data.map(movie => {
          return <li><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></li>
        })}
      </ul>
    )
  }
})
