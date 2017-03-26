import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <button type="submit" className="btn btn-success">Login</button>
            <button className='btn btn-default'>Register</button>
          </form>
        </div>
        <div className='col-lg-2'></div>
      </div>
    )
  }
}