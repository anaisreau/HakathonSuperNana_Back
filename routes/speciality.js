const models = require('../models')
const express = require('express')
const SpeRouter = express.Router()
const dataSpe = require('../dataSpe')


// Afficher toutes les spécialitées
    SpeRouter.get('/speciality', (req, res) => {
        models
            .Speciality
            .findAll( 
                {include : [models.Clinic, models.Price]})
                
            .then(speciality => res.json(speciality))
            
    })

    SpeRouter.post('/speciality/new', (req, res) => {
        models
            .Speciality
            .bulkCreate(dataSpe)
            .then(spe => res.json(spe))
            
    })



module.exports = SpeRouter