import React from 'react'
import { createStore } from 'redux'

const App = () => <p>Starter</p>

export default App

const defaultState = {
  welcome: 'Hi',
  otherState: 'some stuff'
}

const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_NAME':
      return { ...state, welcome: `Hello ${action.name}` }
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello world' }
    default:
      return state
  }
}

const store = createStore(greeting)

store.dispatch({
  type: 'GREET_NAME',
  name: 'Courtney'
})

console.log(store.getState())
