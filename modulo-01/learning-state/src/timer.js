import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.timerInterval
  }

  componentDidMount () {
    this.timerInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerInterval)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
