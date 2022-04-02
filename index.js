const express = require('express')
const bodyParser = require('body-parser')   //importation de body-parse

const clientRoutes = require('./src/routes/client.route')   //importation des client routes



//creation de l'express app
const app = express()

//definition du port d'ecoute
const port = process.env.PORT || 3000

//parse content data type urlencoded
app.use(bodyParser.urlencoded({extend: false}))
//parse content data type json
app.use(bodyParser.json())

//definition de l'url racine
app.get('/', (req, res) => res.send('Hello World!'))

//creation des routes pour client
app.use('/api/v1/client', clientRoutes)

//faire ecouter le server node js
app.listen(port, () => console.log(`le serveur nodejs ecoute sur le port: ${port}!`))