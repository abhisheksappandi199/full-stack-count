import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Configstore from './store/ConfigStore'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

const store = Configstore()
console.log('initial state',store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}><App/></Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))