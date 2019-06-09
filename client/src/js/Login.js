import React, { Component} from 'react'

export default class Login extends Component {

  render() {
    return (
      <div id="background">
        <h2> Login </h2>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <form action="" autocomplete="off">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <button type="button" id="sendlogin" className="btn btn-primary">Login</button>
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
