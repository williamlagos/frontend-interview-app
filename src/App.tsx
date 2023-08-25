import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './pages/Buyflow'

const App = () => {
  const commonSteps = [{
    slug: 'email',
    required: true,
    entries: {
      'email': {
        type: 'email',
        label: 'E-mail'
      } 
    }
  }, {
    slug: 'age',
    entries: {
      'age': {
        type: 'number',
        label: 'Age'
      }
    }
  }]
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_des">
            <Buyflow 
              productId={ProductIds.desIns} 
              steps={[...commonSteps, {
                slug: 'name',
                required: true,
                entries: {
                  'fname': {
                    type: 'text',
                    label: 'First Name'
                  },
                  'lname': {
                    type: 'text',
                    label: 'Last Name'
                  }
                }
              }]}
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
            <div><Link to="/buy/insurance_dev">Get started with Developer Insurance!</Link></div>
            <div><Link to="/buy/insurance_des">Get started with Designer Insurance!</Link></div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
