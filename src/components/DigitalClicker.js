// Code DigitalClicker Component Here

import React, {Component} from 'react'

class DigitalClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(
      (state, props) => ({
        timesClicked: state.timesClicked + 1
      })
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
