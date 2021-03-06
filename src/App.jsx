import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { routes } from './routes.js'
import { AppHeader } from './cmps/AppHeader'

export function App() {
  console.log('aa');
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <main className="container">
          <Switch>
              {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
            </Switch>
        </main>
      </Router>
    </div>
  )
}

