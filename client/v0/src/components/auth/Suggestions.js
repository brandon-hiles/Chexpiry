import React, {Component} from 'react'
import recipeData from './data/recipeData'

export default class Suggestions extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Brandon',
      recipeData
    }
    this.template = this.template.bind(this);
  }

  template() {
    var {recipeData} = this.state;

    return recipeData.map((item) => {
      return (
        <tr>
          <td> {item.recipe} </td>
          <td> {item.ingredients} </td>
          <td> {item.estimate} </td>
          <td> {item.priority} </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <section id="content-area">
          <h2> Suggestions Page </h2>
          <section id="today-choice">
            <div className='box'>
              <h3> Today's Recipe of Choice </h3>
              <p> Recipe 4 </p>
            </div>
          </section>
          <section id="recipes">
            <div className='box'>
              <table className="table">
                <thead>
                  <th> Recipe </th>
                  <th> Number of Ingredients </th>
                  <th> Estimated Time </th>
                  <th> Priority </th>
                </thead>
                <tbody>
                  {this.template()}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </div>
    )
  }
}
