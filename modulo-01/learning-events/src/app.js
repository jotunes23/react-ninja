import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <button
        onClick={event => {
          alert('clicou!')
        }}
      >
        Clique Aqui
      </button>
    )
  }
}

export default App
