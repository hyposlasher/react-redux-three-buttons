import React from 'react'
import ReactDom from 'react-dom'
import { Provider, connect } from 'react-redux'
import App from './containers/App'
import store from './store'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
