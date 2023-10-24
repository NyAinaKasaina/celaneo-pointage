const router       = require('express').Router()
const employee     = require('./controllers/employee.controller')
const registration = require('./controllers/registration.controller')
const timesheet    = require('./controllers/timesheet.controller')

// LISTE DES ROUTES ACCESSIBLES ET DES CONTROLLERS RESPECTIFS

router.get ( '/'             , employee.getAllEmployees )

router.get ( '/registrations', registration.getAllRegistrations )

router.post( '/checkin'      , registration.checkin )

router.post( '/checkout'     , registration.checkout )

router.get ( '/employees'    , employee.getAllEmployees )

router.get ( '/timesheets'   , timesheet.getAllTimeSheets )

// RENVOI D'UN MESSAGE POUR UNE ROUTE NON DEFINIE

router.use('*',(req,res) => {
    const message = "Impossible de trouver la ressource"
    res.status(404).json({ message })
})

module.exports = {
    router
}