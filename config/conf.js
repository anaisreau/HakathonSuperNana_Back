const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Pyewaket83!', // le mot de passe
database :  'clinic-surgery', // le nom de la base de données
});
module.exports = connection;