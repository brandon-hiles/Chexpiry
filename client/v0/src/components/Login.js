import React, { Component} from 'react';
import axios from 'axios';
import { Redirect } from "react-router"
import '../sass/app.scss'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    // do something with form data
    evt.preventDefault();
    let base = 'http://localhost:5000/api/v1/user/check'
    let url = base + `?email=${this.state.email}&password=${this.state.password}`
    axios.get(url).then((response) => {
      // handle success
      let status = response.data['Status']
      if (status == '200') {
        let token = response.data['token']
        sessionStorage.setItem("token", token);
      } else {
        console.log("Failure")
        // Display error under the password field, stating Email and/or password is incorrect
      }
    }).catch((error) => {
      // handle error
      console.log(error);
    })
    this.setState({email : "", password: ""});
  }

  handleChange(evt) {
    // runs on every keystroke event
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <div id="background">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                      <h3 id="login-header"> Login </h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
