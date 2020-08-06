const express = require('express')
const app = express()
const routes = require('./routes.js')

routes.load(app)

app.listen(5000)
