// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick1 = () => {
    this.setState(
      (state, props) => ({settings: {...state.settings, bitrate: 12}})
      // , console.log(this.state.settings.bitrate)
    )
  }
  
  handleClick2 = () => {
    this.setState(
      (state, props) => ({settings: {...state.settings, video: {...state.settings.video, resolution: '720p'}}})
      , console.log(this.state.settings)
    )
  }
  
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick1}>Change Bitrate</button>
        <br/>
        <button className="resolution" onClick={this.handleClick2}>Change Resolution</button>
      </div>
    )
  }
}
