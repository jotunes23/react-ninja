import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = UpdatedApp => {
  render(
    <AppContainer>
      <UpdatedApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const UpdatedApp = require('./app').default
    renderApp(UpdatedApp)
  })
}
