import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">New York Times Search & Save!</h1>
        </header>
        
        <div className="container my-4">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
