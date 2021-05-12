const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})

const scrapingController = require('./controllers/scraping.controller')

io.on('connection', () => {
    setInterval(async () => {
        io.emit('hour', await scrapingController())
    }, 1000)
})

server.listen(process.env.PORT || 3000)