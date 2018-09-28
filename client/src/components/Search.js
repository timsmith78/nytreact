import React, { Component } from 'react'

class Search extends Component {
    state = {
        topic: '',
        startYear: '',
        endYear: ''
    }

    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Search</h5>
                    <hr></hr>
                    <form>
                        <div className="form-group">
                            <label for="topic" className="text-left">Topic:</label>
                            <input type="text" className="form-control" id="form-group" placeholder="Enter search topic"></input>
                        </div>
                        <div className="form-group">
                            <label for="startYear" className="text-left">Starting at Year:</label>
                            <input type="text" className="form-control" id="startYear" placeholder="Enter starting year"></input>
                        </div>
                        <div className="form-group">
                            <label for="endYear" className="text-left">Ending at Year:</label>
                            <input type="text" className="form-control" id="endYear" placeholder="Enter ending year"></input>
                        </div>
                        <div className="text-center">
                            <button type="submit" id="searchBtn" className="btn btn-dark">Search</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Search
