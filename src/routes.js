import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import React from 'react'

import login from './pages/login'
import home from './pages/home'
import register from './pages/register'
import edit from './pages/edit'

export default function Routes (){
    return(
      <Router>
          <Switch>
              <Route exact path='/' component={login}/>
              <Route path="/home" component={home}/>
              <Route path="/register" component={register}/>
              <Route path="/edit" component={edit}/>
          </Switch>
      </Router>
    )
}

