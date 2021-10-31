import React from 'react'

const Button = ({ children, handleClick }) => {
  return (
    <button className='main-button' onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button