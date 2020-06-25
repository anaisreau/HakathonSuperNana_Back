const { INTEGER } = require("sequelize/types");

queryInterface.createTable( 'Prices', {
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
    Price: {
      type: Datatypes.DECIMAL
    }
})