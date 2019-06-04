import React, { Component} from 'react'

export default class Pantry extends Component {

  render() {
    return (
      <div id="background">
        <div id="box">
          <p className="center"> Keep in mind </p>
          <p className="section-heading"> Upcoming expires to think about </p>
          <table>
            <thead>
              <th>
                <td> Fruit/Veggies </td>
                <td> Days Left </td>
              </th>
            </thead>
            <tbody>
              <tr>
                <td> Blueberry </td>
                <td> 1 day </td>
              </tr>
              <tr>
                <td> Apples </td>
                <td> 2 days </td>
              </tr>
              <tr>
                <td> Oranges </td>
                <td> 2 days </td>
              </tr>
              <tr>
                <td> Brocelli </td>
                <td> 3 days </td>
              </tr>
            </tbody>
          </table>

          <p className="caution"> Note: These are just estimates. Exercise judgement before disposing of or consuming given food items </p>
          <h3> Log a food outcome: </h3>
          <a className="btn" href="#"> I Ate it </a>
          <a className="btn" href="#"> I threw it out </a>
        </div>
      </div>
    )
  }
}
