import React, { Component} from 'react'

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      lookup: "localhost:5000/api/lookup" // Location to backend server
    };
  }

  render() {
    return (
      <div id="background">
        <h2>Login</h2>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                      <h3 id="login-header"> Login </h3>
                        <form action="" autocomplete="off">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <p id="login-button">
                              <button type="button" id="sendlogin" className="btn btn-primary btn-color">Login</button>
                            </p>
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
