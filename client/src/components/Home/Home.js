import React, { Component } from 'react'

const Home = () => (
  <div>
    <header className='hero-unit jumbotron text-center' style={ {backgroundColor: "skyblue", width: ''} }>
      <h1 style={ {color: 'white'} }>BookJump</h1>
      <p className='lead' style={ {color: 'white'} }>The first rule of bookjump is don't talk about bookjump.</p>
      <span style={ {fontSize: '60pt', color: 'white'} } className="glyphicon glyphicon-leaf" aria-hidden="true"></span>
    </header>
    <div className="container">
      <div className="col-lg-12">
        <h1 className="page-header">Features:</h1>
        <ul className="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6">
          <li><a href="#">Catalogue Your Book</a></li>
        </ul>
        <ul className="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6">
          <li><a href="#">See all of the books our users own</a></li>
        </ul>
        <ul className="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6">
          <li><a href="#">Request to borrow other users' books</a></li>
        </ul>
        <ul className="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6">
          <li><a href="#">Easily manage books and requests from your dashboard</a></li>
        </ul>
      </div>    
    </div>
  </div>
)

export default Home