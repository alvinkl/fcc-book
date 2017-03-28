import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default class Signup extends Component {
  constructor() {
    super()
    this.handleForm = this.handleForm.bind(this)
  }

  handleForm(e) {
    e.preventDefault()
    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value

    
  }

  render() {
    return (
      <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          <h1>Signup</h1>
          <form onSubmit={ this.handleForm }>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="name" className="form-control" id="name" ref='name'/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" ref='email'/>
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" ref='password'/>
            </div>
            <button className='btn btn-success'>Signup</button>
            <Link to='/login' className="btn btn-default">Login</Link>
          </form>
        </div>
        <div className='col-lg-2'></div>
      </div>
    )
  }
}