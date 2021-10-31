import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'black',
      showTimer: true
    }
    console.log('constructor')
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')

    return (
      <div>
        <Square color={this.state.color} />

        {['red', 'green', 'blue'].map(color => (
          <Button
            key={color}
            handleClick={() => {
              this.setState({ color })
            }}
          >
            {color}
          </Button>
        ))}

        <br />

        {this.state.showTimer && <Timer />}

        <br />

        <button
          onClick={event => {
            this.setState({ showTimer: !this.state.showTimer })
          }}
        >
          Exibir/Ocultar Timer
        </button>
      </div>
    )
  }
}

export default App
