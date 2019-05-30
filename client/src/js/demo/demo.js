import React, { Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = {
  <Router>
    <div>
      <nav id="demo-nav">
        <ul>
          <li> <Link to="/demo/home"> Home </Link></li>
          <li> <Link to="/demo/shopping"> Go Shopping </Link></li>
          <li> <Link to="/demo/pantry"> The Pantry </Link></li>
          <li> <Link to="/demo/suggestions"> My Suggestions </Link></li>
        </ul>
      </nav>
}
