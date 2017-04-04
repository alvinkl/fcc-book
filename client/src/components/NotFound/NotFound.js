import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default class NotFound extends Component {
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
          <h1>404</h1>
          <h4>NOT FOUND</h4>
        </div>
        <div className='col-lg-2'></div>
      </div>
    )
  }
}