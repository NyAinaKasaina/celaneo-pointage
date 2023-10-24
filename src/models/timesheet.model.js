// DEFINITION DU MODELE TIMESHEET QUI CORRESPOND A UN CYCLE DE FEUILLE DE TEMPS D'UN EMPLOYE (CYCLE - CHECKOUT)
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Timesheet',{
        id          : {
            type          : DataTypes.INTEGER,
            primaryKey    : true,
            autoIncrement : true
        },
        employeeId  : {
            type      : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : { msg : `L'identifiant de l'employé ne doit pas être vide` },
                notNull  : { msg : `L'identifiant de l'employé ne doit pas être null` },
            },
            references : {
                model    : 'Employees',
                key      : 'id'
            }
        },
        timesheet : {
            type      : DataTypes.TIME,
            allowNull : false,
            validate : {
                notEmpty : { msg : `Erreur lors de l'enregistrement du temps d'activité de l'employé` },
                notNull  : { msg : `Erreur lors de l'enregistrement du temps d'activité de l'employé` },
            }
        }
    },{
        createdAt : 'dateCreated'
    })
}