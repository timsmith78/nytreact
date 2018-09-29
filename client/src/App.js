import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import Saved from './pages/Saved/Saved'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title text-center">New York Times Search & Save!</h1>
    </header>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/saved' component={Saved} />
      </div>
    </Router>
  </div>
);


export default App;
