import React, { Component} from 'react'
import AWS_CREDENTIALS from './credentials/AWS.js'
import AWS from 'aws-sdk';

export default class Shopping extends Component {
  constructor () {
    super()
    this.state = {
      region: AWS_CREDENTIALS['region'],
      poolID: AWS_CREDENTIALS['poolID'],
      bucketName: AWS_CREDENTIALS['clocky']
    }

    this.setupAWSCredentials = this.setupAWSCredentials.bind(this)
  }

  setupAWSCredentials() {
    AWS.config.region = this.state.region
    AWS.config.credentials = new AWS.CognitoIdentifyCredentials({
      IdentityPoolId: this.state.poolID
    })

    // Error checking
    AWS.config.credentials.get((err) => {
      if (err) console.log(err)
    })

    var bucket = new AWS.S3({
      params: {
        Bucket: this.state.bucketName
      }
    })
  }

  render() {
    return (
      <div id="background">
        <div id="box">
          <p> <strong> Share your story </strong> </p>
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
