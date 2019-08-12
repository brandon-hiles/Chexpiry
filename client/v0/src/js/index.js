import React, {Component} from 'react'

export default class Index extends Component {

    render() {
      return (
        <section id="home">
            <div id="background">
              <div className="container home">
                <div id="box">
                  <h2>
                    <span className="section-heading-upper"> A morsel of impact </span>
                    <span className="section-heading-lower"> Get started on reducing food waste </span>
                  </h2>
                  <p>
                      Upload photos from your grocery shopping for information and reminders about expiration.
                    In time, you can expect suggestions about how you can improve your shopping habits to reduce
                    waste. Let's make sustainable choices, one bite at a time.
                    </p>
                    <p id="login-button">
                      <button type="button" className="btn btn-primary btn-color"> Get Started </button>
                    </p>
                  </div>
                  <img src="img/intro.jpg" className="intro-img"/>
                </div>
              </div>
          </section>
      )
  }
}
