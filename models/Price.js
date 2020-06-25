'use strict'

module.exports = (sequelize, Datatypes) => {
    const Price = sequelize.define('Price', {
        ClinicId : Datatypes.INTEGER,
        SpecialityId : Datatypes.INTEGER, 
        CarePrice : Datatypes.DECIMAL
    }, {
        timestamps : false
    
    })
    return Price
}