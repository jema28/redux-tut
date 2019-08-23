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
    case 'GREET_ME':
      return { ...state, welcome: 'Hello Jem' }
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello world' }
    default:
      return state
  }
}

const store = createStore(greeting)

store.dispatch({
  type: 'GREET_ME'
})

console.log(store.getState())
