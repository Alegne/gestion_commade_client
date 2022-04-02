const dbConn = require('../../config/dbConfig')

var Client = function(client){
    this.nom = client.nom
    this.adresse = client.adresse
    this.phone = client.phone
    this.cin = client.cin
    this.create_at = new Date()
    this.update_at = new Date()
}


//recupere la liste des clients
Client.getAllClient = (result) => {
    dbConn.query('SELECT * FROM Client', (err, res) => {
        if (err) {
            console.log('Erreur en faisant un select sur la table Client', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}


//recuper un client par son ID
Client.getClientID = (id, result) => {
    dbConn.query('SELECT * FROM Client WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur en faisant un select sur la table client by id');
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

//Ajouter un client
Client.postClient = (reqClientData, result) => {
    dbConn.query('INSERT INTO Client SET ?', reqClientData, (res, err) => {
        if (err) {
            console.log("Erreur lors d'insertion d'un client");
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

//update un client
Client.updateClient = (id, reqClientData, result) => {
    dbConn.query('UPDATE Client SET nom=?, adresse=?, cin=?, phone=?, update_at=? WHERE id=?', [reqClientData.nom, reqClientData.adresse, reqClientData.cin, reqClientData.phone, reqClientData.update_at , id], (res, err) => {
        if (err) {
            console.log("Erreur lors de la mise à jour d'un client");
            result(null, err)
        } else {
            result(null, res)
        }
    })
}


//supprimer un client
Client.deleteClient = (id, result) => {
    dbConn.query('DELETE FROM Client WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur lors de la suppression d\'un client')
            result(null, err)
        } else {
            result(null, res)
        }
    } )
}
module.exports = Client