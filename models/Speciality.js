'use strict'



module.exports = (sequelize, Datatypes) => {
    const Speciality = sequelize.define("Speciality", {
        name : Datatypes.STRING,
        care_type : Datatypes.STRING,
        PriceId : Datatypes.INTEGER
        
    }, {
        timestamps : false
    })

    Speciality.associate = models => {
        Speciality.belongsToMany(models.Clinic, {
            through: models.Price, 
            foreignKey: 'SpecialityId',
        })
    }
    return Speciality 
}