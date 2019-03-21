



module.exports = {
    get: (req, res) => {
        res.send(userArr)
    },

    create: (req, res) => {
        let { title } = req.body
        let foundConfidant = confidants.find((confidant) => {
            return confidant.title === title
        })
        let userCheck = userArr.find((confidant) => {
            return confidant.title === title
        })

        if(!foundConfidant){
            res.status(404).send(alert("Confidant Not Found"))
        } else if(userCheck){
            res.status(409).send(alert("Confidant is Already In List"))
        } else if(foundConfidant && !userCheck){
            userArr.push(foundConfidant)
            res.status(200).send(userArr)
        }
    },

    update: (req, res) => {
        let updatedConfidant = {
            id,
            title,
            name,
            rank: rank++,
            cardUrl
        }
        let index = userArr.findIndex(confidant => confidant.id === req.params.id)

        userArr.splice(index, 1, updatedConfidant)
        res.send(userArr)
    },


    delete: (req, res) => {
        let { id } = req.params

        let index = userArr.findIndex(confidant => confidant.id === req.params.id)

        userArr.splice(index, 1)
        res.send(userArr)

    }
}

