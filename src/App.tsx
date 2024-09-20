import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { ProductIds, commonSteps, extraSteps } from './app/config'
import { Buyflow } from './pages'
import logo from './logo.svg'
import './App.css'

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route path="/buy/insurance_des">
          <Buyflow 
            productId={ProductIds.desIns} 
            steps={[...commonSteps, ...extraSteps]}
          />
        </Route>
        <Route path="/buy/insurance_dev">
          <Buyflow 
            productId={ProductIds.devIns} 
            steps={[...commonSteps]}
          />
        </Route>
        <Route path="/">
          <p>Welcome to Getsafe's Insurance Portal</p>
          <div><Link data-cy="developer-start" to="/buy/insurance_dev">Get started with Developer Insurance!</Link></div>
          <div><Link data-cy="designer-start" to="/buy/insurance_des">Get started with Designer Insurance!</Link></div>
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App
