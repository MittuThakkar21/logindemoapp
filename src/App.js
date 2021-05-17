import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  // const [token, setToken] = useState();


  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (

    <Router>
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/dashboard' component={Dashboard} />


      </Switch>
    </Router>

  );
}

export default App;
