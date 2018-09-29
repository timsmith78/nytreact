const express = require('express')
const router = express.Router()
const path = require('path')

const db = require('../models')

// Save articles
router.post('/api/articles', (req, res) => {
    db.Article.create(req.body).then( dbArticle => { console.log('New article: ' + dbArticle); res.json(dbArticle) })
})

// Retrieve articles
router.get('/api/articles', (req, res) => {
    db.Article.find().then( dbResult => { console.log('Retrieved article: ' + dbResult); res.json(dbResult)}) 
})

// Delete article
router.delete('/api/articles/:id', (req, res) => {
    db.Article.findByIdAndRemove(req.params.id, article => res.json(article))
})

// Get html
router.get('*'), (req, res) => {
    res.sendFile('./client/build/index.html', { root : __dirname })

}

module.exports = router