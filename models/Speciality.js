'use strict'


module.exports = (sequelize, Datatypes) => {
    const Speciality = sequelize.define("Speciality", {
        name : Datatypes.STRING,
        care_type : Datatypes.STRING
    }, {
        timestamps : false
    })

    Speciality.associate = models => {
        Speciality.belongsToMany(models.Clinic, {
            through: 'Price', 
            //prices: Datatypes.INTEGER,
            timestamps : false
        })
    }
    return Speciality 
}