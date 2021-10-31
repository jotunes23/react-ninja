import React, { Component } from 'react'
import Square from './square'
import Title from './title'
import Button from './button'
import LikeButton from './likeButton'

class App extends Component {
  render () {
    return (
      <div data-js='main' className='container'>
        <Title name={{ firstName: 'Jonatas' }} />

        {['blue', 'red', 'green'].map(color => (
          <Square key={color} color={color} />
        ))}

        <Button>
          <span>Componente Children - </span>
          Botão de Teste
        </Button>

        <br />

        <LikeButton />
      </div>
    )
  }
}

export default App
