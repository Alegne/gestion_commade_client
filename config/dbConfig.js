const mysql = require('mysql')

var mysql_host = process.env.DB_HOST || 'localhost'
var mysql_port = process.env.DB_PORT || '3306'
var mysql_DB = process.env.DB_NAME || 'gestion_commande'
var mysql_user = process.env.DB_USER || 'root'
var mysql_password = process.env.DB_PASSWORD || ''

//creation mysql connexion
const dbconn = mysql.createConnection({
    host: mysql_host,
    port: mysql_port,
    user: mysql_user,
    password: mysql_password,
    database: mysql_DB
})

dbconn.connect(function(error){
    if (error) throw error
    console.log('Connexion à la base de donnée reussie !')
    
})

module.exports = dbconn