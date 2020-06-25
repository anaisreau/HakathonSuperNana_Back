'use strict'

const Speciality = require("./Speciality");



module.exports = (sequelize, Datatypes) => {
    const Clinic = sequelize.define("Clinic", {
        name : Datatypes.STRING, 
        adress : Datatypes.STRING,
        zip_code : Datatypes.INTEGER,
        city : Datatypes.STRING,
        country : Datatypes.STRING,
        SpecialityId : Datatypes.INTEGER, 
        CarePriceId : Datatypes.INTEGER,
    }, {
        timestamps : false

    })

    Clinic.associate = models => {
        Clinic.belongsToMany(models.Speciality, {
            through: models.Price,
            foreignKey : 'ClinicId',
            
        });
        
    };
    
    return Clinic;
}