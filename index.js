const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./config/conf')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('hello home')
})


    // Afficher toutes les spécialitées
    app.get('/speciality', (req, res) => {
        connection.query('SELECT DISTINCT name, care_type FROM specialities ', (err, results) => {
            if (err) {
                res.status(500).send('Error from getting spé')
            } else {
                res.json(results)
            }
        })
    })
    app.post('/speciality/new', (req, res) => {
        const data = req.body

        connection.query('INSERT INTO specialities SET ?', data, (err, results) => {
            if (err) {
                res.send('you dont create spec data')
            } else {
                res.json(results)
            }
        })

    })

    // Afficher toutes les cliniques
    app.get('/clinic', (req, res) => { SELECT clinic_has_speciality.*, specialities.*, FROM clinic_has_speciality, specialities INNER JOIN Clinics
        connection.query('SELECT Clinics.*, specialities.* FROM Clinics, specialities INNER JOIN clinic_has_speciality AS cli ON clinicId=Clinics.idclinic JOIN clinic_has_speciality AS c ON c.specialityId=specialities.idspeciality', (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.json(results)
            }
        }) 
    })

    app.get('/clinic/city', (req, res) => {
        connection.query('SELECT DISTINCT city FROM Clinics', (err, results) => {
            if (err) {
                res.status(500).send('Error from getting clinics')
            } else {
                res.json(results)
            }
        })
    })

    app.get('/clinic/country', (req, res) => {
        connection.query('SELECT DISTINCT country FROM Clinics', (err, results) => {
            if (err) {
                res.status(500).send('Error from getting clinics')
            } else {
                res.json(results)
            }
        })
    })



    app.post('/clinic/new', (req, res) => {
        const data = req.body

        connection.query('INSERT INTO clinics SET ?', data, (err, results) => {
            if (err) {
                res.send('you dont create clinic data')
            } else {
                res.json(results)
            }
        })

    })

    app.listen(3000, (err) => {
        if (err) {
            throw new Error('server is running bad')
        }
        console.log('server running well')

    })