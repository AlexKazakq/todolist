import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './app/App'
import {store} from './app/store'
import {Provider} from 'react-redux'
import {HashRouter} from "react-router-dom"

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>, document.getElementById('root'))
}

rerenderEntireTree()

serviceWorker.unregister()


if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app/App', () => {
        rerenderEntireTree();
    })
}