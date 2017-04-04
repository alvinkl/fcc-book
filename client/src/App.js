import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import AuthService from './auth/AuthService'

import Container from './container'

import Home from './components/Home'
import Login from './Login'
import NotFound from './components/NotFound'
import AllBook from './components/AllBook'

const auth = new AuthService('s4lEHl7axVVvvfFscxQN6LZh6w0dj7rt', 'alvinkl.au.auth0.com')

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
}

const App = () => (
  <Router history={ hashHistory } auth={ auth }>
    <Route component={ Container } auth={ auth }>
      <Route path='/' component={ Home }></Route>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path='/login' component={ () => <Login auth={ auth } /> }></Route>
      <Route path='/allbook' component={ AllBook } onEnter={ requireAuth } auth={ auth }></Route>
      <Route path='/mybook' component={ AllBook } onEnter={ requireAuth } auth={ auth }></Route>
      <Route path='*' component={ NotFound }></Route>
    </Route>
  </Router>
)

export default App
