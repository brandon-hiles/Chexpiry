import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Footer extends Component {

  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="logo"> Logo </div>
          <div className="aboutUs">
            <div className="flex-container">
              <h3> About Us </h3>
              <a href="#"> Who we are </a>
              <a href="#"> FAQ </a>
            </div>
          </div>
          <div className="legal">
            <div className="flex-container">
              <h3> Legal </h3>
              <a href="#"> Terms of use </a>
              <a href="#"> Privacy Policy </a>
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
      </footer>
    )
  }
}
