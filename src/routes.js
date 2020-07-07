import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import React from 'react'

import login from './pages/login'
import home from './pages/home'

export default function Routes (){
    return(
      <Router>
          <Switch>
              <Route exact path='/' component={login}/>
              <Route path="/home" component={home} />
          </Switch>
      </Router>
    )
}

