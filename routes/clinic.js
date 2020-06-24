
const clinicRouter = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// const dataClinic = require('../data_clinic')




// Afficher toutes les cliniques avec leurs spécialitées
clinicRouter.get('/clinic', (req, res) => {
    models
        .Clinic
        .findAll()
        // {include : [models.Specility]}
        .then(clinic => res.json(clinic))
        .then(res.status(200).send('All clinics with their speciality care'))
})

clinicRouter.post('/clinic', (req, res) => {
    models
        .Clinic
        .bulkCreate(dataClinic)
        .then(clinic => res.json(clinic))
})






module.exports = clinicRouter