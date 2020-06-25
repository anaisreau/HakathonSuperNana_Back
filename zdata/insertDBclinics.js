var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO clinics (name, address, zip_code, city, country) VALUES ?";
  var values = [
    {
        //perte poids
        name : "Dr. HE Obesity Clinic", 
        adress : "Meşrutiyet, Eser Palas, Nişantaşı, Vali Konağı Cd. No:125 D:3",
        zip_code : 34365,
        city : "Istanbul",
        country : "Turquie",
        SpecialityId : [10,11]
    },
    {
        //perte poids
        name : "Memorial Ataşehir Hospital", 
        adress : "Küçükbakkalköy Mah. Vedat Günyol Cad. No: 28-30",
        zip_code : 34758,
        city : "Istanbul",
        country : "Turquie",
        SpecialityId : 11
    },
    {
        //perte poids
        name : "Sachsenhausen Hospital", 
        adress : "Schulstraße 31",
        zip_code : 60594,
        city : "Francfort",
        country : "Allemagne",
        SpecialityId : 11
    },
    {
        //procréation
        name : "Dunya IVF Clinic", 
        adress : "23 Kadife Sokak",
        zip_code : 0,
        city : "Kyrenia",
        country : "Chypre",
        SpecialityId : 7
    },
    {
        //procréation
        name : "Memorial Ataşehir Hospital", 
        adress : "Küçükbakkalköy Mah. Vedat Günyol Cad. No: 28-30",
        zip_code : 34758,
        city : "Istanbul",
        country : "Turquie",
        SpecialityId : 8
    },
    {
        //procréation
        name : "Medicana Hospitals Group", 
        adress : "Bahçelievler Mh.",
        zip_code : 34180,
        city : "Istanbul",
        country : "Turquie",
        SpecialityId : 9
    },
    {   //Rhinoplasty hair implant
        name : "Estetik International Clinic", 
        adress : "Quasar Tower- Fulya Mahallesi, Büyükdere Cd. Quasar Tower No:76 ",
        zip_code : 34394,
        city : "Istanbul",
        country : "Turquie",
        SpecialityId : 5
    },
    {   //Rhinoplasty hair implant
        name : "Adem and Havva Medical Center", 
        adress : "Cumhuriyet, Cumhuriyet Mahallesi, İncirli Dede Caddesi, No:6/2 Anthill Towers",
        zip_code : 34381,
        city : "Istanbul",
        country : "Turquie",
        SpecialityId : 5
    },
    {   //Dentist
        name : "MDental Clinic", 
        adress : "Teréz krt. 55-57",
        zip_code : 1062,
        city : "Budapest",
        country : "Hongrie",
        SpecialityId : 1
    },
    {   //Dentist
        name : "Bangkok International Dental Center", 
        adress : "157, 159 Ratchadaphisek Rd, Khwaeng Din Daeng, Din Daeng, Krung Thep Maha Nakhon",
        zip_code : 10400,
        city : "Bangkok",
        country : "Thailande",
        SpecialityId : 2
    },
    {   //Dentist
        name : "Albusdent Dentistry Centre", 
        adress : "Balicka 73",
        zip_code : 30149,
        city : "Cracovie",
        country : "Pologne",
        SpecialityId : 1
    }

]

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});