import React from 'react'
import { Redirect, Route, useHistory } from 'react-router'
import Dashboard from './components/Dashboard'

const PublicRoute = (props) => {
    const token = localStorage.getItem('token')
    console.log('token in public ', token);
    const { component: WrappedComponent, render, ...rest } = props;
    var loggedIn = true

    if (token == null) {
        loggedIn = false
    }
    return (
        <div>
            <Route
                {...rest}
                render={props => (
                    <>
                        {token === null ? (
                            <Redirect to="/login" />
                        ) : (
                            <WrappedComponent {...props} />
                        )}
                    </>
                )}
            />
        </div>
    )
}

export default PublicRoute
