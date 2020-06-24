const models = require('../models')
const express = require('express')
const ClinicRouter = express.Router()
const dataClinic = require('../dataclinic')


// Afficher toutes les cliniques avec leurs spécialitées
    ClinicRouter.get('/clinic', (req, res) => {
        models
            .Clinic
            .findAll()
            // {include : [models.Speciality]}
            .then(clinic => res.json(clinic))
            //.then(res.status(200).send('All clinics with their speciality care'))
    })

    ClinicRouter.post('/clinic/new', (req, res) => {
        models
            .Clinic
            .bulkCreate(dataClinic)
            .then(clinic => res.json(clinic))
            // .then(res.send('Clinic added'))
    })



module.exports = ClinicRouter