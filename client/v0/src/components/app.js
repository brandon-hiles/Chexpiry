import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./helpers/PrivateRoute";
import { Redirect } from "react-router";
import Navigation from './Navigation';
import Header from './Header';
import Home from './public/Home.js'
import Demo from './public/Demo.js'
import Login from './Login.js'
import Register from './Register.js'

// Authenticated Routes
import Logout from './auth/Logout'
import Pantry from './auth/Pantry'
import Settings from './auth/Settings'
import Suggestions from './auth/Suggestions'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            token: sessionStorage.getItem("token")
        };

      }

    componentDidMount() {
        if (this.state.token != null) {
            this.setState({
                isLogin: true
            })
        }
    }

    render() {
        return (
            <Router>
                <Header isLogin={this.state.isLogin}/>
                <Navigation />
                
                {/* Non-autheticated paths*/}
                <Route exact path="/" component={() => 
                this.state.isLogin === true ? <Redirect to="/" /> : <Home /> 
                } />
                <Route path="/demo/" component={() => <Demo />} />
                <Route path="/login" component={() => 
                    this.state.isLogin === true ? <Redirect to="/" /> : <Login />
                    } />
                <Route path="/register" component={() => <Register />} />
                
                {/* Authenticated paths: Fix problem with changing Dashboard from header to actual dashboard */}
                <PrivateRoute path="/Dashboard" component={() => <Dashboard />} />
                <PrivateRoute path="/settings" component={() => <Settings />} />
                <PrivateRoute path="/pantry" component={() => <Pantry />} />
                <PrivateRoute path="/suggestions" component={() => <Suggestions />} />
                <PrivateRoute path="/logout" component={() => <Logout />} />
            </Router>        
        )
    }
}
