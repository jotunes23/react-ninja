import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button
    handleClick={event => {
      alert('Botão de Like!')
    }}
  >
    Curtir
  </Button>
)

export default LikeButton
