import React, { Component} from 'react'
import axios from 'axios';
import '../sass/app.scss'

export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    // do something with form data
    evt.preventDefault();
    let base = "http://localhost:5000/api/v1/user/store";
    let url = base + `?first_name=${this.state.first_name}&last_name=${this.state.last_name}&phone=${this.state.phone_number}&email=${this.state.email}&password=${this.state.password}`
    axios.post(url).then((response) => {
      let token = response.data['token']
      sessionStorage.setItem("token", token);
    }).catch((error) => {
      console.log(error);
    })
    this.setState({email : ""});
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
                      <h3 id="login-header"> Register </h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="First Name"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                className="form-control"
                                name="phone_number"
                                placeholder="Phone Number"
                                value={this.state.phone_number}
                                onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange = {this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                className="form-control"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                value={this.state.confirm_password}
                                onChange= {this.handleChange}/>
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
