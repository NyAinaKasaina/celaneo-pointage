// DEFINITION DU MODELE REGISTRATION QUI EST UTILISEE A LA FOIS POUR CHECKIN ET CHECKOUT
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Registration',{
        id         : {
            type          : DataTypes.INTEGER,
            primaryKey    : true,
            autoIncrement : true
        },
        employeeId : {
            type       : DataTypes.STRING,
            allowNull  : false,
            validate   : {
                notEmpty : { msg : `L'identifiant de l'employé ne doit pas être vide` },
                notNull  : { msg : `L'identifiant de l'employé ne doit pas être null` },
            },
            references : {
                model    : 'Employees',
                key      : 'id'
            }
        },
        action : {
            type        : DataTypes.ENUM('CHECKIN','CHECKOUT'),
            allowNull   : false,
            validate   : {
                notEmpty : { msg : `L'action(checkin/checkout) à performer ne peut pas être vide` },
                notNull  : { msg : `L'action(checkin/checkout) à performer ne peut pas être null` },
            },
        },
        comment    : {
            type      : DataTypes.TEXT,
        },
    },{
        createdAt : 'dateRegistration',
        updatedAt : false
    })
}