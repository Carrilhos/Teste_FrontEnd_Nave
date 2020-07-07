import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import React from 'react'

import login from './componetes /login'

export default function Routes (){
    return(
      <Router>
          <Switch>
              <Route exact path='/' component={login}/>
          </Switch>
      </Router>
    )
}

