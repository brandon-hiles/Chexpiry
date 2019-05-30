import React, { Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home.js'

export default class Header extends Component {

  render() {
    return (
      <header>
        <h1> Chexpiry </h1>
        <h2> An Intellegent way to reduce waste </h2>
      </header>
    )
  }
}
