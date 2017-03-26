import React, { Component } from 'react'
// import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Container from './container'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      {/*<Router history={ hashHistory }>
        <Route path='/' component={ Container }>
          <IndexRoute component={ Container }></IndexRoute>
        </Route>
      </Router>*/}
    return (
      <Container>
        <Home></Home>
      </Container>
    );
  }
}

export default App;
