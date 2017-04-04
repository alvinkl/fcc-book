import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

import { loginUser } from '../../../GlobalConfig'

import TradeRequest from '../components/TradeRequest'

export default class Container extends Component {

  render() {
    const { auth } = this.props.route
    
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
              {
                !auth.loggedIn() &&
                <li><Link to="/login">Login</Link></li>
              }
              { 
                auth.loggedIn() &&
                <li><Link to='/allbook'>All Book</Link></li>
              }
              {
                auth.loggedIn() &&
                <li><Link to='/mybook'>My Book</Link></li>
              }
            </ul>
          </div>
        </nav>
        {
          auth.loggedIn() &&
          this.props.location.pathname !== '/' &&
          <TradeRequest user={ auth }/>
        }
        { this.props.children }
      </div>
    )
  }
}