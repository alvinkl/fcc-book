import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
      <div className='container'>
        <nav className="navbar container">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">bookjump</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </nav>
        { this.props.children }
      </div>
    )
  }
}