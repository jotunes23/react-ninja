import React, { Component } from 'react'
import Square from './square'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div data-js='main' className='container'>
        <Title name={{ firstName: 'Jonatas' }} />

        {['blue', 'red', 'green'].map(color => (
          <Square key={color} color={color} />
        ))}
      </div>
    )
  }
}

export default App
