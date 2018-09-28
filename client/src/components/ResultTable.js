import React, { Component } from 'react'
import ResultEntry from './ResultEntry'

class ResultTable extends Component {
    render() {
        return (
            <ul>
                {this.props.results.map(result => <ResultEntry key={result.web_url} entry={result} /> )}
            </ul>
        )
    }
}

export default ResultTable
