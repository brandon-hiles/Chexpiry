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
        <h2> Suggestions Page </h2>
        <section id="content-area">
          <section id="today-choice">
            <h3> Today's Recipe of Choice </h3>
            <p> Recipe 4 </p>
          </section>
          <section id="recipes">
            <table>
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
          </section>
        </section>
      </div>
    )
  }
}
