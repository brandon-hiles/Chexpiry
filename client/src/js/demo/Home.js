import React, {Component} from 'react'

export default class Home extends Component {

  render() {
    return (
      <div id="background">
        <div id="container">
          <div id="box">
          <p className="center"> <strong> A MORSEL OF IMPACT </strong> </p>
          <p className="section-heading"> GET STARTED ON REDUCING FOOD WASTE </p>
          <p>
          Upload photos from your grocery shopping for information and reminders about expiration.
          In time, you can expect suggestions about how you can improve your shopping habits to reduce
          waste. Let's make sustainable choices, one bite at a time.
          </p>
          </div>
          <img src="img/intro.jpg" />
        </div>
      </div>
    )
  }
}
