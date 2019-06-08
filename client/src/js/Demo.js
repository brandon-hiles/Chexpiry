import React, {Component} from 'react'

export default class Demo extends Component {

      render() {
        return (
          <div id="background">
            <div id="box">
              <p> <strong> Demo our Application </strong> </p>
              <p className="section-heading"> SCAN YOUR GROCERIES </p>
              <p> Attach a photo of your groceries for identification </p>
              <input type="file" id="file-chooser" />
              <button id="upload-btn"> Upload </button>
              <div id="results"> </div>
            </div>
          </div>
        )
      }
    }
