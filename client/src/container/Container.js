import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Container extends Component {
  render() {
    return (
      <div className='container'>
        <nav className="navbar container">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">bookjump</Link>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }
}