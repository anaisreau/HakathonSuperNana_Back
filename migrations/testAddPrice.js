const { INTEGER } = require("sequelize/types");

queryInterface.createTable( 'Price', {
    ClinicId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Clinic',
            key: 'id'
        }
    },
    SpecialityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Speciality',
            key: 'id'
        }
    },
    // new column for join table
    carePrice: {
      type: Datatypes.DECIMAL
    }
})