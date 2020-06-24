const express = require('express')
const models = require('./models')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser({
    extended : true
}))



models
    .sequelize
    .sync()
    .then(app.listen(3000), () => {
        console.log(`Server is running`)
    })