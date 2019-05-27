import React, { Component} from 'react'
import ReactDOM from 'react-dom'


class App extends Component {

  render() {
    return (
      <h1> Home Page </h1>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
