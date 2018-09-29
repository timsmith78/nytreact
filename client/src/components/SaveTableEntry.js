import React, { Component } from 'react'
import moment from 'moment'

class SaveTableEntry extends Component {
    render() {
        return (
            <li>
                <hr className='my-2'></hr>
                <a href={this.props.entry.web_url}>{this.props.entry.title}</a>
                <p>Publication date: {moment(this.props.entry.published).format('LL')}</p>
                <p>Abstract: {this.props.entry.abstract || 'Not Available'}</p> 
                <button id={this.props.entry._id} className='btn btn-dark' onClick={this.props.delete(this.props.entry._id)}>Delete</button>
            </li>
        )
    }
}

export default SaveTableEntry