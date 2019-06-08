import React, { Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Index from './index.js'
import Demo from './Demo.js'
import Login from './Login.js'
import Register from './Register.js'

export default class Navigation extends Component {

  render() {
    return (
      <Router>
        <div id="main-content">
          <h1> Chexpiry </h1>
          <h2> AN INTELLIGENT WAY TO REDUCE WASTE </h2>
          <header>
              <nav id="demo-nav">
                <ul>
                  <li> <Link to="/" className="links">Home</Link> </li>
                  <li> <Link to="/demo" className="links">Get Started</Link> </li>
                  <li> <Link to="/login" className="links"> Login</Link> </li>
                  <li> <Link to="/register" className="links"> Register</Link> </li>
                </ul>
              </nav>
            </header>
          <Route exact path="/" component={Index} />
          <Route path="/demo/" component={Demo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    )
  }
}
