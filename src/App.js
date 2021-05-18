import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import PublicRoute from './PublicRoute'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {


      setLoggedIn({ loggedIn: true })
    }
  }, [])

  return (

    <Router>
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <PublicRoute exact='/dashboard' component={Dashboard} />

        <Redirect path='/login' />
      </Switch>
    </Router>

  );
}

export default App;
