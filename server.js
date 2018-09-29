// Setup database
const mongoose = require('mongoose')
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const db = require('./models')

// Setup web server
const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'client/build')))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const PORT = process.env.PORT || 8090

// Import and activate routes
const routes = require('./controller/controller.js')
app.use(routes)

// Start server
app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT}`)
})