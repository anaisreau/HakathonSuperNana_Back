const express = require('express')
const models = require('./models')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser({
    extended: true
}))

const ClinicRouter = require('./routes/clinic')
const SpeRouter = require('./routes/speciality')

app.use('/', (ClinicRouter, SpeRouter))

models
    .sequelize
    .sync({ force: true })
    .then(app.listen(3002), () => {
        console.log('Server is running')
    })
