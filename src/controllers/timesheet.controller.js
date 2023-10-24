const TimesheetService = require('../services/timesheet.service')

// FONCTION RENVOYANT LA LISTE DES FEUILLE DE TEMPS PAR EMPLOYE DEPUIS LE SERVICE getAllTimeSheets()

exports.getAllTimeSheets = async (req, res) => {
    let timesheets = []
    try{
        timesheets = await TimesheetService.getAllTimeSheets()
        message   = `Récupération de la liste des feuilles de temps des employés avec succès`

        res.status(200).json({
            message, 
            data : timesheets
        })

    } catch (error) {
        console.error('Erreur lors de la récupération de la liste des feuilles de temps des employés :', error)
        res.status(500).json({ message: 'Impossible de récupérer la liste des feuilles de temps des employés', data: error })
    }
}
