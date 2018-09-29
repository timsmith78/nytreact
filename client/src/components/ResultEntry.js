import React from 'react'
import moment from 'moment'
import axios from 'axios'

const handleSave = article => event => {
    event.preventDefault()
    console.log('article data: ' + article.headline.main)
    let pkt = {}
    pkt.title = article.headline.main
    pkt.web_url = article.web_url
    pkt.published = article.pub_date
    pkt.abstract = article.abstract
    axios.post('/api/articles', pkt).then( resp => console.log('resp: ' + resp)).catch( err => console.log('err: ' + err))

}

const ResultEntry = props =>
    <li>
        <hr className="my-2"></hr>
        <a href={props.entry.web_url} target="_blank">{props.entry.headline.main}</a>
        <p>{moment(props.entry.pub_date).format('LL')}</p>
        <p>Abstract: {props.entry.abstract || 'Not Available'}</p>
        <button className="btn btn-dark" onClick={handleSave(props.entry)}>Save Article</button>
    </li>


export default ResultEntry