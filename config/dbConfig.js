const mysql = require('mysql')

var mysql_host = process.env.MYSQL_HOST || 'localhost'
var mysql_port = process.env.MYSQL_PORT || '3306'
var mysql_DB = process.env.MYSQL_DB || 'gestion_commande'
var mysql_user = process.env.MYSQL_USER || 'root'
var mysql_password = process.env.MYSQL_PASSWORD || ''

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