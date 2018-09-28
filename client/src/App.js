import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import ResultTable from './components/ResultTable'


class App extends Component {
  state = {
    topic: '',
    startYear: '',
    endYear: '',
    searchResults: []
  }

  handleInput = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSearchClick = event => {
    event.preventDefault()

    let query = "https://api.nytimes.com/svc/search/v2/articlesearch.json"//?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
    console.log(`query: ${query}`)
    axios.get(query, {
      params: {
        'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
        q: this.state.topic,
        'begin_date': `${this.state.startYear}0101`,
        'end_date': `${this.state.endYear}0101`,
        fl: 'web_url,abstract,headline,pub_date'
      }
    }).then (result => {
      console.log(`res: ${JSON.stringify(result)}`)
      this.setState({ searchResults: result.data.response.docs.slice(0, 5) })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">New York Times Search & Save!</h1>
        </header>

        <div className="container my-2">
          <div className="card my-4">
            <div className="card-body">
              <h5 className="card-title text-center">Search</h5>
              <hr></hr>
              <form>
                <div className="form-group">
                  <label for="topic" className="text-left">Topic:</label>
                  <input type="text" className="form-control" id="topic" onChange={this.handleInput} placeholder="Enter search topic" />
                </div>
                <div className="form-group">
                  <label for="startYear" className="text-left">Starting at Year:</label>
                  <input type="text" className="form-control" id="startYear" onChange={this.handleInput} placeholder="Enter starting year" />
                </div>
                <div className="form-group">
                  <label for="endYear" className="text-left">Ending at Year:</label>
                  <input type="text" className="form-control" id="endYear" onChange={this.handleInput} placeholder="Enter ending year" />
                </div>
                <div className="text-center">
                  <button type="submit" id="searchBtn" className="btn btn-dark" onClick={this.handleSearchClick}>Search</button>
                </div>
              </form>
            </div>
          </div>
          <div className="card my-4">
            <div className="card-body">
              <h5 className="card-title text-center">Results</h5>
              <hr></hr>
              <ResultTable results={this.state.searchResults} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
