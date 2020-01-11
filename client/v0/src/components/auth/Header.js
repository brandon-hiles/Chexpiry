import React, {Component} from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default class PrivateHeader extends Component {

  render() {
      return (
        <Router>
          <div>
            <section id="sideMenu">
              <h2 className="title"> Chexpiry </h2>
              <nav>
                <li> <Link to="/" className="active"> <i className="fa fa-home" aria-hidden="true"></i> Profile </Link> </li>
                <li> <Link to="/settings"> <i className="fa fa-cog" aria-hidden="true"></i> Settings </Link> </li>
                <li> <Link to="/pantry"> <i className="fa fa-bookmark-o" aria-hidden="true"></i> Pantry </Link> </li>
                <li> <Link to="/suggestions"> <i className="fa fa-calendar-check-o" aria-hidden="true"></i> Suggestions </Link> </li>
                <li> <Link to="/logout"> <i className="fa fa-user-circle" aria-hidden="true"></i> Logout </Link> </li>
              </nav>
              <footer>
                <p className="copyright"> Copyright &copy; 2019 </p>
              </footer>
            </section>
          </div>
        </Router>
      )
  }
}
