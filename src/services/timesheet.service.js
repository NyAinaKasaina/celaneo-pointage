const { Timesheet, Employee, Registration }  = require("../../database/database.config")
const { convertMillisecondsToHHMMSS }           = require("../utils")

// FONCTION PERMETTANT DE CALCULER LE TEMPS ENTRE LE DERNIER CHECKOUT ET LE DERNIER CHECKIN

const calculateTimesheet = async (employeeId) => {
    try {
      // RECHERCHE DES DEUX DERNIERES ENTREES POUR L'EMPLOYE EN PARAMETRE
      const registrations = await Registration.findAll({
        where: {
          employeeId: employeeId,
        },
        order: [['dateRegistration', 'DESC']],
        limit: 2,
      })
  
      // VERIFICATION DU NOMBRE D'ENTREES TROUVEES
      if (registrations.length < 2) {
        console.log("Pas assez de pointage pour faire le calcul du timesheet.")
        return 0 
      }
  
      // CALCUL DE LA DIFFERENCE EN HEURES ENTRE LES DEUX ENTREES
      const checkout = registrations[0]
      const checkin  = registrations[1]
      const timeDifferenceInMilliseconds = checkout.dateRegistration - checkin.dateRegistration
      
      return convertMillisecondsToHHMMSS(timeDifferenceInMilliseconds)
    } catch (error) {
      console.error('Erreur lors du calcul du timesheet :', error)
      throw error 
    }
}

// FONCTION PERMETTANT L'INSERTION D'UNE NOUVELLE FEUILLE DE TEMPS DANS LA TABLE Timesheets

exports.createTimesheet = async (employeeId) => {
    try {
        const timesheet = await calculateTimesheet(employeeId)
        if (timesheet === 0) {
          return "Impossible de calculer le timesheet." 
        }

        // CREATION DE LA FEUILLE DE TEMPS
        return Timesheet.create({
            employeeId: employeeId,
            timesheet: timesheet,
        })
      } catch (error) {
        console.error('Erreur lors de la création du timesheet :', error)
        throw error
    }
}

// FONCTION RENVOYANT LA LISTE DES FEUILLES DE TEMPS

exports.getAllTimeSheets = async () => {
    return Timesheet.findAll({
        attributes : ['id', 'employeeId','timesheet'],
        include    : [{
            model: Employee,
            attributes: ['name','firstName','department'],
        }],
        order : [
          ['timesheet','DESC'],
          [Employee,'name','ASC']
        ]
    })
}
