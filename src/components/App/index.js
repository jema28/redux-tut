/* eslint react/no-did-mount-set-state: 0 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MoviesList from '../MovieList'
import MovieDetail from '../MovieDetail'

const hello = () => 'hello'
const store = createStore(hello)

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </Router>
  </Provider>
)

export default App
