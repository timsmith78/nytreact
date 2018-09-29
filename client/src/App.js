import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title text-center">New York Times Search & Save!</h1>
    </header>
    <Router>
      <div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      </div>
    </Router>
  </div>
);


export default App;
