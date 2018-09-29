import React, { Component } from 'react'
import SaveTableEntry from './SaveTableEntry'

class SaveTable extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map(one => <SaveTableEntry entry={one} delete={this.props.delete}/>)}
            </ul>
        )
    }
}

export default SaveTable

