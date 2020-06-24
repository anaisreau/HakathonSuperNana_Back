const express = require('express')
const models = require('./models')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser({
    extended: true
}))

const ClinicRouter = require('./routes/clinic')

app.use('/', (ClinicRouter))

models
    .sequelize
    .sync({ force: true })
    .then(app.listen(3000), () => {
        console.log('Server is running')
    })
