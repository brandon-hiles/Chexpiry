import React, {Component} from 'react'
import pantryData from './data/pantryData'

export default class Pantry extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Brandon',
      pantryData
    }
    this.template = this.template.bind(this);
  }

  template() {
    var {pantryData} = this.state;

    return pantryData.map((item) => {
      return (
        <tr>
          <td> {item.item} </td>
          <td> {item.createDate} </td>
          <td> {item.expiryDate} </td>
          <td> {item.delete} </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <section id="content-area">
          <h2> Pantry Page </h2>
          <section id="pantry">
            <table className="table">
              <thead>
                <th> Produce Item </th>
                <th> Date Entered </th>
                <th> Expiry Date </th>
                <th> Delete Item </th>
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
