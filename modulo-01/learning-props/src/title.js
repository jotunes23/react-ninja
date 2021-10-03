import React from 'react'

const Title = props => {
  return <h1>{`Olá, ${props.name.firstName}!`}</h1>
}

Title.defaultProps = {
  name: {
    firstName: 'Desconhecido'
  }
}

export default Title
