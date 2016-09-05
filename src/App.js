import React from 'react'
import NavLink from './components/NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({
    handleSubmit(event) {
    event.preventDefault()
    const query = event.target.elements[0].value
    const path = `/search/${query}`
    browserHistory.push(path)
    console.log(path)
  },

  render() {
    return (
      <div>
        <h1>Movies!</h1>
        <div className="Toolbar">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Movie Title"/>
            <button type="submit">Search</button>
          </form>
          <NavLink to="/" onlyActiveOnIndex={true}>Most Popular</NavLink>
        </div>
        {this.props.children}
      </div>
    )
  }
})
