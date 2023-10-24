const { Registration, sequelize, Employee } = require("../../database/database.config")
const TimesheetService                      = require("./timesheet.service")

// FONCTION PERMETTANT D'INSCRIRE UN CHECKIN ET UN CHECKOUT DANS LA BASE DE DONNEES

const register  = async (employee) => {
    return await Registration.create(employee)
}

// FONCTION RENVOYANT LA DERNIERE ENREGISTREMENT DEPUIS LA TABLE REGISTRATION

const getLastRegistration = async(employeeId) => {
    const result = await sequelize.transaction(async (t) => {
        // RECHERCHE DE LA DERNIERE ENTREE
        const lastRegistration = await Registration.findOne({
            where       : {
                employeeId: employeeId,
            },
            order       : [['dateRegistration', 'DESC']],
            limit       : 1, 
            transaction : t, 
        })
        
        return lastRegistration

    })
    
    return result
}

// FONCTION RENVOYANT LA LISTE DES ENREGISTREMENTS DEPUIS LA BASE DE DONNEES 

exports.getAllRegistrations = async () => {
    return Registration.findAll({
        attributes: ['dateRegistration', 'action'],
        include: [{
            model: Employee,
            attributes: ['id', 'name','firstName','department'],
        }],
        order : [
            ['dateRegistration','DESC'],
            [Employee,'name','ASC']
        ]
    })
}

// FONCTION PERMETTANT DE VALIDER L'ENREGISTREMENT D'UN CHECKIN DANS LA BASE DE DONNEES 

exports.checkin = async (employee) => {

    const lastRegistration = await getLastRegistration(employee.employeeId)

    if (lastRegistration && lastRegistration.action === 'CHECKIN') {
        return {
            message: 'Vous avez déjà pointé en entrée !!! '
        }
    }

    const newRegistration  = await register(employee)

    return {
        message: `Pointage d'entrée réussi !!!`,
        registration: newRegistration
    }
}

// FONCTION PERMETTANT DE VALIDER L'ENREGISTREMENT D'UN CHECKOUT DANS LA BASE DE DONNEES 

exports.checkout = async (employee) => {

    const lastRegistration = await getLastRegistration(employee.employeeId)

    if (!lastRegistration){
        return { 
            message: `Veuillez pointer en entrée !!! ` 
        }
    }

    if (lastRegistration && lastRegistration.action === 'CHECKOUT') {
        return { 
            message: 'Vous avez déjà pointé en sortie !!! ' 
        }
    }

    const newRegistration  = await register(employee)

    const timesheet        = await TimesheetService.createTimesheet(employee.employeeId)
    
    return {
        message: 'Pointage de sortie réussi !!!',
        timesheet: timesheet,
        registration : newRegistration
    }
}
