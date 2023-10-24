// IMPORTATION DES MODULES 

const express          = require('express')
const cors             = require('cors')
const database         = require('./database/database.config')
const { router }       = require('./src/main.route')
const { errorHandler } = require('./src/middlewares/error-handler')
const bodyParser       = require('body-parser')

// SYNCHRONISATION ET ALIMENTATION DE LA BASE DE DONNEES

database.syncDb()
    .then( () => {
        console.log('Base de données initialisée')
        return database.insertEmployeeMocks()
    })
    .then( () => {
        console.log('Mocks employés insérés avec succès !')
        return database.insertRegistrationMocks()  
    })
    .then(() => {
        console.log('Mocks registrations insérés avec succès !')
    })
    .catch( error => console.log(error) )


// CREATION / CONFIGURATION DU SERVEUR / CHAINAGE AVEC LES MIDDLEWARES

const server     = express()

server.use(bodyParser.json())
server.use(cors())
server.use(router)
server.use(errorHandler)

const port       = 3000
server.listen(port, () => {
    console.log(`Serveur actif sur le port ${ port }`)
})    


