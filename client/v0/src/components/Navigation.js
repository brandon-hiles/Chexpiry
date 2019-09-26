import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import '../sass/app.scss'

export default class Navigation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }


  render() {
    return (

        <div id="main-content">
          <nav id="demo-nav">
            <ul>
              <li> <Link to="/" className="links"> Home </Link></li>
              <li> <Link to="/demo" className="links">Get Started</Link> </li>
              <li> <Link to="/login" className="links"> Login</Link> </li>
              <li> <Link to="/register" className="links"> Register</Link> </li>
            </ul>
          </nav>
        </div>
    )
  }
}
