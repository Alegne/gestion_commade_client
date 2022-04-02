const ClientModel = require('../models/client.model')

//get all clients
exports.getClientList = (req, res) => {
    ClientModel.getAllClient((err, client) => {
        if (err) {
            res.send(err)
        } else {
            res.send(client)
        }
    })
}

//get one client by ID
exports.getClientID = (req, res) =>  {
    ClientModel.getClientID(req.params.id, (err, client) => {
        if (err) {
            res.send(err)
        } else {
            res.send(client)            
        }
    })
}

//post on client
exports.postClient = (req, res) => {
    const clientData = new ClientModel(req.body)

    //Verifie si les champs sont vide
    if (req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({success: false, message: "Veuillez remplir tous les champs"})
    } else {
        ClientModel.postClient(clientData, (err, client) => {
            if (err) {
                res.send(err)
            } else {
                res.send(client)
            }
        })
    }
}

//update a client
exports.updateClient = (req, res) => {
    const clientData = new ClientModel(req.body)

    //Verifie si les champs sont vide
    if (req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({success: false, message: "Veuillez remplir tous les champs"})
    } else {
        ClientModel.updateClient(req.params.id, clientData, (err, client) => {
            if (err) {
                res.send(err)
            } else {
                res.send(client)
            }
        })
    }
}

//delete a client
exports.deleteClient = (req, res) => {
    ClientModel.deleteClient(req.params.id, (err, client) => {
        if (err) {
            res.send(err)
        } else {
            res.send(client)            
        }
    })
}