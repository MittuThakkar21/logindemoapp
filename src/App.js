import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import CompA from './contextapi/CompA';
import PublicRoute from './PublicRoute'

//context Api 
const FirstName = createContext();
const LastName = createContext();


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const token = localStorage.getItem('token')
  useEffect(() => {

    if (token) {
      setLoggedIn({ loggedIn: true })
    }
  }, [token])

  return (
    <>

      <Router>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/registration' component={Registration} />
          <PublicRoute exact='/dashboard' component={Dashboard} />


          <Redirect to='/login' />

        </Switch>
      </Router>

      {/*create a Provider for passing value in consumer in context api */}

      <FirstName.Provider value={'Mittu Thakkar'}>
        <LastName.Provider value={'m r t last'}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>


    </>

  );
}

export default App;
export { FirstName, LastName };
