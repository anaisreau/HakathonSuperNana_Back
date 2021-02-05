const express = require('express')
const models = require('./models')
const app = express()
const bodyParser = require('body-parser')

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const ClinicRouter = require('./routes/clinic')
const SpeRouter = require('./routes/speciality')
const dataclinic = require('../HakathonSuperNana_Back/dataclinic')
const dataSpe = require('../HakathonSuperNana_Back/dataSpe')

app.use('/', (ClinicRouter, SpeRouter))


function clinic(){
    models
    .Clinic
    .bulkCreate(dataclinic)
    .then(clinic => console.log(clinic))
    // .then(res.send('Clinic added'))
}

function spec(){
    models
    .Speciality
    .bulkCreate(dataSpe)
    .then(spe => console.log(spe))
}

models
    .sequelize
    .sync({ force: true }).then (() => {
        console.log('drop and resync bdd');
        clinic()
        spec()
    })
    .then(app.listen(3002), () => {
        console.log('Server is running')
    })
