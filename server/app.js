const { join } = require('path')

const express = require('express')
const compression = require('compression')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const router = require('./routes')

const app = express()

app.set('port', process.env.PORT || 3001)

app.use(compression())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

// app.use(express.static(join(__dirname, '..', '..', 'public')))

app.use(router)

module.exports = app
