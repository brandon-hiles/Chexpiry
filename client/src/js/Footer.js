import React, {Component} from 'react'

export default class Footer extends Component {

  render() {
    return (
      <footer id="footer">
        <div className="footer-top">

        </div>
        <div className="footer-bottom">
          <div className="icons-container">
            <p className="socials"> Follow me on the socials </p>
            <a target="_blank" href="#"> <img src="img/icons/footer-icon-github.svg" /> </a>
            <a target="_blank" href="#"> <img src="img/icons/footer-icon-twitter.svg" /> </a>
            <a target="_blank" href="#"> <img src="img/icons/footer-icon-linkedin.svg" /> </a>
          </div>
          <div className="copyright-section">
            <p className="copyright"> &copy; Copyright 2019 Chexpiry. All rights are reversed</p>
          </div>
        </div>
      </footer>
    )
  }
}
