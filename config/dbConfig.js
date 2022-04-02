const mysql = require('mysql')

//creation mysql connexion

const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_commande'
})

dbconn.connect(function(error){
    if (error) throw error
    console.log('Connexion à la base de donnée reussie !')
    
})

module.exports = dbconn