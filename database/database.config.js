 // IMPORTATION DES FONCTIONS / MODULES / DONNEES MOCKS 

const { DataTypes, Sequelize }      = require("sequelize")
const EmployeeModel                 = require('../src/models/Employee.model')
const RegistrationModel             = require("../src/models/registration.model")
const TimesheetModel                = require('../src/models/timesheet.model')
const { employees , registrations } = require("./mock")

// CREATION DE LA CONNEXION AVEC LA BASE DE DONNNEES SQLITE

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : './database/checkin.sqlite'
})


// INSTANCIATION DES MODELES

const Employee     = EmployeeModel(sequelize,DataTypes)
const Registration = RegistrationModel(sequelize,DataTypes)
const Timesheet    = TimesheetModel(sequelize,DataTypes)

// DEFINITION DE LA RELATION ONE TO MANY ENTRE REGISTRATION AND EMPLOYEE

Employee.hasMany(Registration,{
  foreignKey : {
    name : 'employeeId',
    allowNull : false
  }
})

Registration.belongsTo(Employee,{
  foreignKey : {
    name : 'employeeId',
    allowNull : false
  }
})

// DEFINITION DE LA RELATION ONE TO MANY ENTRE TIMESHEET AND EMPLOYEE

Employee.hasMany(Timesheet,{
  foreignKey : {
    name : 'employeeId',
    allowNull : false
  }
})

Timesheet.belongsTo(Employee,{
  foreignKey : {
    name : 'employeeId',
    allowNull : false
  }
})

// SYNCHRONISATION DE LA BASE DE DONNEES 

const syncDb   = () => {
    return sequelize.sync({ force : true })
}


// INSERTION DES DONNEES MOCKS

  // ** MOCKS EMPLOYEES
const insertEmployeeMocks = () => {
  return Employee.bulkCreate(employees)
};

  // ** MOCKS REGISTRATIONS
const insertRegistrationMocks = () => {
  return Registration.bulkCreate(registrations)
}

module.exports = {
    syncDb,
    insertEmployeeMocks,
    insertRegistrationMocks,
    sequelize,
    Employee,
    Registration, 
    Timesheet
}