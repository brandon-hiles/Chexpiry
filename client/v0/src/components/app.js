import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Navigation from './Navigation';
import Header from './Header';
import Home from './Home.js'
import Demo from './Demo.js'
import Login from './Login.js'
import Register from './Register.js'

// Authenticated Routes
import Dashboard from './auth/Dashboard';
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
                this.state.isLogin === true ? <Redirect to="/Dashboard" /> : <Home /> 
                } />
                <Route path="/demo/" component={() => <Demo />} />
                <Route path="/login" component={() => 
                    this.state.isLogin === true ? <Redirect to="/Dashboard" /> : <Login />
                    } />
                <Route path="/register" component={() => <Register />} />
                {/* Authenticated paths */}
                <Route path="/Dashboard" component={() => <Dashboard />} />
                <Route path="/settings" component={() => <Settings />} />
                <Route path="/pantry" component={() => <Pantry />} />
                <Route path="/suggestions" component={() => <Suggestions />} />
                <Route path="/logout" component={() => <Logout />} />
            </Router>        
        )
    }
}
