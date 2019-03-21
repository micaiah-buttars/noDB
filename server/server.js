const express = require('express')

const confidantsController = require('./controllers/confidantsController')

const app = express()
const port = 3555

app.use(express.json())

app.get('/api/confidants', confidantsController.get)
app.post('/api/confidants', confidantsController.create)
app.put('/api/confidants/:id', confidantsController.update)
app.delete('/api/confidants/:id', confidantsController.delete)

app.listen(port, () => {
    console.log(`This is ${port}, the mission is go.`)
})