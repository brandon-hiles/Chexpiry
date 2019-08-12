import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import Navigation from './Navigation.js'
import Footer from './footer/Footer.js'
import Dashboard from './auth/Dashboard.js'
import Register from './Register.js'
import Login from './Login.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Chexpiry',
    }
  }

  render() {
    return (
      <Navigation />
      )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
