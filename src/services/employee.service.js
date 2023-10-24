const { Employee } = require("../../database/database.config")

// FONCTION RECUPERANT LA LISTE DES EMPLOYEES DANS LA BASE DE DONNEES

exports.getAllEmployees = async() => {
    return await Employee.findAll({
        order : [[ 'id','ASC' ]]
    })
}

// FONCTION RECUPERANT LA LISTE DES EMPLOYEES DANS LA BASE DE DONNEES EN APPLIQUANT UN FILTRE PAR DATE DE CREATION 

exports.getAllEmployeesFilterByDate = async(dateCreated) => {
    return await Employee.findAll({
        order : [[ 'id','ASC' ]],
        where : {
            dateCreated : dateCreated
        }
    })
}