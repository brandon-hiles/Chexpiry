import React, {Component} from 'react'
import '../sass/app.scss'

export default class Demo extends Component {

      render() {
        return (
          <section id="demo">
          <div id="background">
            <div className="container">
              <div id="box">
                <p> <strong> Demo our Application </strong> </p>
                <p className="section-heading"> SCAN YOUR GROCERIES </p>
                <p> Attach a photo of your groceries for identification </p>
                <input type="file" id="file-chooser" />
                <button id="upload-btn"> Upload </button>
                <div id="results"> </div>
              </div>
              <img src="img/about.jpg" className="intro-img" />
            </div>
          </div>
        </section>
        )
      }
    }
