/* eslint react/no-did-mount-set-state: 0 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers/rootReducer'
import MoviesList from '../MovieList'
import MovieDetail from '../MovieDetail'

const store = createStore(rootReducer)

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
