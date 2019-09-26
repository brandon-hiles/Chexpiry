import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import About from './About.js'
import Fact from './FAQ.js'
import Privacy from './Privacy.js'
import Terms from './Terms.js'

export default class Footer extends Component {

  render() {
    return (
      <Router>
        <footer id="footer">
          <div className="footer-top">
            <div className="logo"> <h2> Chexpiry </h2> </div>
            <div className="footer_box">
              <div className="aboutUs">
                <div className="flex-container">
                  <h3> About Us </h3>
                    <Link to="/about" className="link"> Who we are </Link>
                    <Link to="/facts" className="link"> FAQ </Link>
                </div>
              </div>
              <div className="legal">
                <div className="flex-container">
                  <h3> Legal </h3>
                    <Link to="/terms" className="link"> Terms of Use </Link>
                    <Link to="/privacy" className="link"> Privacy Policy </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p className="socials"> Follow me on the socials </p>
            <div className="icons-container">
            <a target="_blank" href="https://www.github.com/brandon-hiles/"> <img src="img/icons/footer-icon-github.svg" /> </a>
            <a target="_blank" href="https://twitter.com/BrandonJHiles"> <img src="img/icons/footer-icon-twitter.svg" /> </a>
            <a target="_blank" href="https://www.linkedin.com/in/brandon-hiles/"> <img src="img/icons/footer-icon-linkedin.svg" /> </a>
            </div>
            <div className="copyright-section">
              <p className="copyright"> &copy; Copyright 2019 Chexpiry. All rights are reversed</p>
            </div>
          </div>
          <Route path="/about" component={About} />
          <Route path="/facts" component={Fact} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
        </footer>
      </Router>
    )
  }
}
