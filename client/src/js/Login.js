import React, { Component} from 'react'

export default class Login extends Component {

  render() {
    return (
      <div>
        <h2> Login </h2>
        <form method="POST">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
