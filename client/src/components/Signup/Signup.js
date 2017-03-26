import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          <h1>Signup</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Name:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <button className='btn btn-success'>Signup</button>
            <button type="submit" className="btn btn-default">Login</button>
          </form>
        </div>
        <div className='col-lg-2'></div>
      </div>
    )
  }
}