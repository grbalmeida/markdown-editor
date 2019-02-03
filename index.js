'use strict'

const { join } = require('path')
const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.use(express.static(join(__dirname, 'dist')))

app.get('*', (request, response) => {
  response.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => console.log('Listening on http://localhost:3000'))

