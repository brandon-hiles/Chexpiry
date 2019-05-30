import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from './demo/Header.js'
import Home from './demo/Home.js'
import Main from './Home.js'
import Login from './Login.js'
import Register from './Register'

const routing = (
  <Router>
    <div>
      <nav id="main-nav">
        <ul>
          <li className="logo"> <Link to="/">Home</Link> </li>
          <li> <Link to="/demo">Get Started</Link> </li>
          <li> <Link to="/login"> Login</Link> </li>
          <li> <Link to="/register"> Register</Link> </li>
        </ul>
      </nav>
      <Route exact path="/" component={Main} />
      <Route path="/demo" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('app'))
