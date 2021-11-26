import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import store from './redux/store'

import App from './App'
import "./components/fonts/font.scss"

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)
