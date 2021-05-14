import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (

    <Router>
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />

      </Switch>
    </Router>

  );
}

export default App;
