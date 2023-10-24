// DEFINITION DU MODELE EMPLOYEE
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Employee',{
        id          : {
            type          : DataTypes.STRING,
            primaryKey    : true,
        },
        name        : {
            type      : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : { msg : `Le nom ne doit pas être vide` },
                notNull  : { msg : `Le nom ne doit pas être null` },
            },
        },
        dateCreated : {
            type      : DataTypes.DATEONLY,
            allowNull : false,
            validate : {
                notEmpty : { msg : `La date de création ne doit pas être vide` },
                notNull  : { msg : `La date de création ne doit pas être null` },
            },
        },
        firstName   : DataTypes.STRING,
        department  : DataTypes.STRING
    },{
        timestamps: false
    })
}