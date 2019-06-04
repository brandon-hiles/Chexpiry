import React, { Component} from 'react'

export default class Suggestions extends Component {

  render() {
    return (
      <div id="background">
        <div id="box">
          <p className="center"> <strong> WE'RE ALL FOR CONTINUOUS IMPROVEMENT... </strong> </p>
          <p className="section-heading"> New Suggestions </p>
          <p className="blue"> Recipe for You! </p>
          <p className="result"> I heard that blueberry pie makes a great dessert... <a href="#">This one</a> looks delicious! </p>
          <p className="yellow"> Food for thought </p>
          <p className="result"> Lately, you've been unable to finish your oranges. Consider purchasing fewer next time to reduce your waste. </p>
          <p className="green"> Yay for sustainability </p>
          <p className="result"> Great job, you wasted 25% less food than last week! </p>
          <p className="red"> Take a Good Look! </p>
          <p className="result"> Take a good look at your blueberries... Some might have gone bad. Stay safe! </p>
        </div>
      </div>
    )
  }
}
