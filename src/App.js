import React from 'react'
import { createStore } from 'redux'

const App = () => <p>Starter</p>

export default App

const hello = () => ({ welcome: 'hello' })
const store = createStore(hello)
console.log(store.getState()) // { welcome: 'hello' }
