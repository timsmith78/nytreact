import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SaveTable from '../../components/SaveTable'

class Saved extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadArticles()
    }

    loadArticles = () => {
        axios.get('/api/articles').then(result => {
            console.log('Saved articles: ' + JSON.stringify(result))
            this.setState({ articles: result.data })
        })
    }
    handleDelete = articleId => event => {
        event.preventDefault()
        axios.delete('/api/articles/' + articleId).then( xArt => {
            this.loadArticles()
        })
    }

    render() {
        return (
            <div className="container">
                <Link to='/'>Back to Home</Link>
                <div className="card my-4">
                    <div className="card-body">
                        <h5 className="card-title text-center">Saved Articles</h5>
                        <SaveTable data={this.state.articles} delete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Saved
