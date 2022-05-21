import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard'

const Routes = () => {
  return (
    <Switch>

        <Route path='/' exact component = {Dashboard}/>
  
      
    </Switch>
  )
}

export default Routes
