import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import React from 'react'

import login from './pages/login'
import home from './pages/home'
import register from './pages/register'
import edit from './pages/edit'

import { isAuthenticated } from "./services/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

export default function Routes (){
    return(
      <Router>
          <Switch>
              <Route exact path='/' component={login}/>
              <PrivateRoute path="/home" component={home}/>
              <PrivateRoute path="/register" component={register}/>
              <PrivateRoute path="/edit" component={edit}/>
          </Switch>
      </Router>
    )
}

