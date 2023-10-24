const Employee        = require('../services/employee.service')
const { isDateValid } = require('../utils')

// FONCTION RENVOYANT LA LISTE DES EMPLOYES

exports.getAllEmployees = async (req, res) => {
    try{
        let employees  = null
        let message    = ''
        let filterDate = req.query.dateCreated
    
        // VERIFICATION DE LA VALIDITE DE LA DATE EN PARAMETRES
    
        if (isDateValid(filterDate)){
            
            // APPEL DU SERVICE QUI RECUPERE LA LISTE FILTREE PAR DATE 
    
            employees = await Employee.getAllEmployeesFilterByDate(filterDate)
            message   = `Récupération de la liste des employés filtrée par date avec succès`
        } else {
    
            // APPEL PAR DEFAUT DU SERVICE QUI RECUPERE LA LISTE SI AUCUNE DATE N'EST RENSEIGNEE
            employees = await Employee.getAllEmployees()
            message   = `Récupération de la liste des employés avec succès`
        }
    
        res.status(200).json({
            message, 
            data : employees
        })
    } catch (error) {
        console.error('Erreur lors de la récupération de la liste des employés :', error)
        res.status(500).json({ message: 'Impossible de récupérer la liste des employés', data: error })
    }

}

