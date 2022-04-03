const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()
var mysql_host = process.env.DB_HOST
var mysql_port = process.env.DB_PORT
var mysql_DB = process.env.DB_NAME
var mysql_user = process.env.DB_USER
var mysql_password = process.env.DB_PASSWORD
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