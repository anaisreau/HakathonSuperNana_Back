'use strict'

module.exports = (sequelize, Datatypes) => {
    const Price = sequelize.define("Price", {
        carePrice : Datatypes.DECIMAL, 
       
    }, {
        timestamps : false

    })

   
    
    return Price;
}