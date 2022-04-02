const express = require("express")

const router = express.Router()

const clientController = require('../controllers/client.controller')



//get la liste des client
router.get('/', clientController.getClientList)

//get on client by ID
router.get('/:id', clientController.getClientID)

//post on client
router.post('/', clientController.postClient)

//update a client
router.put('/:id', clientController.updateClient)

//delete a client
router.delete('/:id', clientController.deleteClient)

module.exports = router