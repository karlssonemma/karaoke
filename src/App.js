import React from 'react';

import GlobalStyle from './components/GlobalStyle';
import HomePage from './containers/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/'>
            <GlobalStyle />
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  )
};

export default App;