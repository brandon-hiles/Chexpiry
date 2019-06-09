import React, { Component} from 'react'

export default class Register extends Component {

  render() {
    return (
      <div id="background">
        <h2> Register </h2>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <form action="" autocomplete="off">
                            <div className="form-group">
                                <input type="text" className="form-control" name="first_name" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="last_name" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="phone-number" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" />
                            </div>
                            <button type="button" id="sendlogin" className="btn btn-primary">Register</button>
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
