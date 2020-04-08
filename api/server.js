const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send("Auth0 practice API")
})

module.exports = server