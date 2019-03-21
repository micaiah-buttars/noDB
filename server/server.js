const express = require('express')

const ArcanaController = require('./controllers/ArcanaController')

const app = express()
const port = 3555

app.use(express.json())


app.listen(port, () => {
    console.log(`This is ${port}, the mission is go.`)
})