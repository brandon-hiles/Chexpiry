import React, {Component} from 'react'
import '../sass/app.scss'

export default class Header extends Component {
    constructor(props) {
        super(props)

      }

    render() {
        if (this.props.isLogin == false) {
            return (
                <div>
                    <header id="new-user-header">
                        <div id="title">
                            <h1> Chexpiry </h1>
                            <h2> AN INTELLIGENT WAY TO REDUCE WASTE </h2>
                        </div>
                    </header>
                </div>
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}