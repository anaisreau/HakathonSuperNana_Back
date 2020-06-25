'use strict'

const Speciality = require("./Speciality");



module.exports = (sequelize, Datatypes) => {
    const Price = sequelize.define("Price", {
        carePrice : Datatypes.DECIMAL, 
       
    }, {
        timestamps : false

    })

   
    
    return Price;
}