const RegistrationService = require('../services/registration.service')

// FONCTION PERMETTANT DE FAIRE UN CHECKIN

exports.checkin = async (req, res) => {
    try {
        const employee  = {
            employeeId  : req.body.employeeId,
            action      : 'CHECKIN',
            comment     : req.body.comment,
        }
  
      // APPEL DU SERVICE POUR EFFECTUER LE POINTAGE D'ENTREE
        const result    = await RegistrationService.checkin(employee)
  
        res.status(200).json(result)
    } catch (error) {
        console.error('Erreur lors du pointage d\'entrée :', error)
        res.status(500).json({
            message: 'Une erreur s\'est produite lors du pointage d\'entrée.',
        })
    }
}

// FONCTION PERMETTANT DE FAIRE UN CHECKOUT

exports.checkout = async (req, res) => {
    try {
        const employee = {
            employeeId : req.body.employeeId,
            action     : 'CHECKOUT',
            comment    : req.body.comment,
        }
  
        // APPEL DU SERVICE POUR EFFECTUER LE POINTAGE DE SORTIE
        const result   = await RegistrationService.checkout(employee)
    
        res.status(200).json(result)

    } catch (error) {
        console.error('Erreur lors du pointage de sortie :', error)
        res.status(500).json({
            message: `Une erreur s'est produite lors du pointage de sortie.`,
        })
    }
}

// FONCTION RENVOYANT LA LISTE DES CHECKINS ET CHECKOUTS PAR EMPLOYE DEPUIS LE SERVICE getAllRegistrations()

exports.getAllRegistrations = async(req, res) => {
    let registrations = []
    try{
        registrations = await RegistrationService.getAllRegistrations()
        message   = `Récupération de la liste des pointages des employés avec succès`

        res.status(200).json({
            message, 
            data : registrations
        })

    } catch (error) {
        console.error('Erreur lors de la récupération de la liste des pointages des employés :', error)
        res.status(500).json({ message: 'Impossible de récupérer la liste des pointages des employés', data: error })
    }
}