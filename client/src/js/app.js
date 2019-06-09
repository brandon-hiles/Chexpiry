import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation.js'
import Login from './Login.js'
import Footer from './Footer.js'
import Dashboard from './auth/Dashboard.js'

class App extends Component {

  render() {
    return (
      <div>
        <Dashboard />
      </div>
  )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
