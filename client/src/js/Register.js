import React, { Component} from 'react'

export default class Register extends Component {

  render() {
    return (
      <div>
        <h2> Register </h2>
        <form method="POST">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
