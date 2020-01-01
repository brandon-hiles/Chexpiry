import React, {Component} from 'react';
import * as d3 from 'd3';

const axios = require('axios');

export default class Dashboard extends Component {

    /* 
    Potential Items to add:
    1. Reminder Component (/helpers)
    2. Priorization List (/auth)
    3. Analytics (Seperate List) <-- NON-AI (Values computed from the AI stored in cache for example)
    4. Analytics (Seperate List) <--- AI Based (Values that actively use the AI resource and consume GPU)
    */

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    grabData() {
        // Put this into a component lifestyle method
        axios.get('/api/data/user_info').then((res) => {
            let data = res.data[0]
            this.setState({
                "firstName": data["firstName"],
                "lastName" : data["lastName"]
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                I'm working
            </div>
        )
    }
}