import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Container from './container'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AllBook from './components/AllBook'

const App = () => (
  <Router history={ hashHistory } >
    <Route component={ Container }>
      <Route path='/' component={ Home }></Route>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path='/login' component={ Login }></Route>
      <Route path='/signup' component={ Signup }></Route>
      <Route path='/allbook' component={ AllBook }></Route>
    </Route>
  </Router>
)

export default App
