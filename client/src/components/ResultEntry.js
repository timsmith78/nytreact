import React from 'react'
import moment from 'moment'

const ResultEntry = props => 
    <li>
    <a href={props.entry.web_url}>{props.entry.headline.main}</a>
    <p>{moment(props.entry.pub_date).format('LL')}</p>
    <p>Abstract: {props.entry.abstract || 'Not Available'}</p>
    </li>


export default ResultEntry