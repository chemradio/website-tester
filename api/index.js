require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exitHook = require('async-exit-hook')
const cookieParser = require('cookie-parser')
const config = require('./config')

const orders = require('./app/orders')
const users = require('./app/users')


const app = express()
const port = 8000

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        origin: ['http://localhost:3000'],
    }),
)

app.use('/orders', orders)
app.use('/users', users)


const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options)
    console.log('Mongo connected')
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`)
    })

    exitHook(() => {
        mongoose.disconnect()
        console.log('MongoDb disconnect')
    })
}

run().catch(e => console.error(e))
