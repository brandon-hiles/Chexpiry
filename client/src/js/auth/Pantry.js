import React, {Component} from 'react'

export default class Pantry extends Component {



  render() {
    return (
      <div id="pantry">
        <h2> Pantry Page </h2>
        <table className="table">
          <thead>
            <th> Produce Item </th>
            <th> Date Entered </th>
            <th> Expiry Date </th>
            <th> Delete Item </th>
          </thead>
          <tbody>
            <tr>
              <td> Item 1 </td>
              <td> 06/08/2019 </td>
              <td> 06/10/2019 </td>
              <td> <input type="submit" /> </td>
            </tr>
            <tr>
              <td> Item 2 </td>
              <td> 06/08/2019 </td>
              <td> 06/12/2019 </td>
              <td> <input type="submit" /> </td>
            </tr>
            <tr>
              <td> Item 3 </td>
              <td> 06/09/2019 </td>
              <td> 06/15/2019 </td>
              <td> <input type="submit" /> </td>
            </tr>
            <tr>
              <td> Item 4 </td>
              <td> 06/07/2019 </td>
              <td> 06/10/2019 </td>
              <td> <input type="submit" /> </td>
            </tr>
            <tr>
              <td> Item 5 </td>
              <td> 06/08/2019 </td>
              <td> 06/10/2019 </td>
              <td> <input type="submit" /> </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
