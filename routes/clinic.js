const models = require('../models')
const express = require('express')
const ClinicRouter = express.Router()
const dataclinic = require('../dataclinic')


// Afficher toutes les cliniques avec leurs spécialitées
    ClinicRouter.get('/clinic', (req, res) => {
        models
            .Clinic
            .findAll({
                include : [models.Speciality, models.Price]})
            .then(clinic => res.json(clinic))
            
    })

    ClinicRouter.post('/clinic/new', (req, res) => {
        models
            .Clinic
            .bulkCreate(dataclinic)
            .then(clinic => res.json(clinic))
            // .then(res.send('Clinic added'))
    })



module.exports = ClinicRouter