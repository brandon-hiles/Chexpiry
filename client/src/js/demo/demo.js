import React, { Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home.js'
import Pantry from './Pantry.js'
import Suggestions from './Suggestions.js'
import Shopping from './Shopping.js'

export default class Demo extends Component {

    render() {
      return (
        <Router>
          <div>
            <header>
              <nav id="demo-nav">
                <ul>
                  <li> <Link to="/demo/home"> Home </Link></li>
                  <li> <Link to="/demo/shopping"> Go Shopping </Link></li>
                  <li> <Link to="/demo/pantry"> The Pantry </Link></li>
                  <li> <Link to="/demo/suggestions"> My Suggestions </Link></li>
                </ul>
              </nav>
            </header>
            <Route path="/demo/home" component={Home} />
            <Route path="/demo/shopping" component={Shopping} />
            <Route path="/demo/pantry" component={Pantry} />
            <Route path="/demo/suggestions" component={Suggestions} />
          </div>
        </Router>
      )
    }
}
