const express = require("express");
const router = require('./router');
const data=[
  {
    numVehic: "274784944",
    marqVehic: "DACIA",
    typeVehic: "Ocassion",
    nbrePlaceVehic: 5,
    pdsVehiVid: "1 t",
    usagPro: false,
    modExploit:"NATIONAL",
    nif: "9461123232143",
    genreVehic: "Individuelle",
    puissanceVehic: "181 cv",
    chargUtil: 300,
    datMiseCircu:"2020-09-24T21:00:00.000Z",// new Date("09/19/2014").toISOString(),
    debutExploit:"2020-09-24T21:00:00.000Z",// new Date("2020-09-24T21:00:00.000Z").toISOString(),
    datDecla:"2020-09-24T21:00:00.000Z",// new Date("09/19/2020").toISOString(),
    statut: {
     code:20,
    },
    datDerModif:"2020-09-24T21:00:00.000Z",// new Date("09/25/2021").toISOString(),
    datModifStatut:"2020-09-24T21:00:00.000Z",//new Date("09/25/2021").toISOString(),
    atNonAfect: "",
    utilisateur: "IGY",
  },{
    numVehic: "274788744944",
    marqVehic: "DACIA",
    typeVehic: "Ocassion",
    nbrePlaceVehic: 5,
    pdsVehiVid: "1 t",
    usagPro: false,
    modExploit:"NATIONAL",
    nif: "123232143",
    genreVehic: "Individuelle",
    puissanceVehic: "181 cv",
    chargUtil: 300,
    datMiseCircu:"2020-09-24T21:00:00.000Z",// new Date("09/19/2014").toISOString(),
    debutExploit:"2020-09-24T21:00:00.000Z",// new Date("2020-09-24T21:00:00.000Z").toISOString(),
    datDecla:"2020-09-24T21:00:00.000Z",// new Date("09/19/2020").toISOString(),
    statut: {
     code:10,
    },
    datDerModif:"2020-09-24T21:00:00.000Z",// new Date("09/25/2021").toISOString(),
    datModifStatut:"2020-09-24T21:00:00.000Z",//new Date("09/25/2021").toISOString(),
    atNonAfect: "",
    utilisateur: "IGY",
  },{
    numVehic: "2797846544",
    marqVehic: "DACIA",
    typeVehic: "Ocassion",
    nbrePlaceVehic: 5,
    pdsVehiVid: "1 t",
    usagPro: false,
    modExploit:"NATIONAL",
    nif: "123232143",
    genreVehic: "Individuelle",
    puissanceVehic: "181 cv",
    chargUtil: 300,
    datMiseCircu:"2020-09-24T21:00:00.000Z",// new Date("09/19/2014").toISOString(),
    debutExploit:"2020-09-24T21:00:00.000Z",// new Date("2020-09-24T21:00:00.000Z").toISOString(),
    datDecla:"2020-09-24T21:00:00.000Z",// new Date("09/19/2020").toISOString(),
    statut: {
     code:20,
    },
    datDerModif:"2020-09-24T21:00:00.000Z",// new Date("09/25/2021").toISOString(),
    datModifStatut:"2020-09-24T21:00:00.000Z",//new Date("09/25/2021").toISOString(),
    atNonAfect: "",
    utilisateur: "IGY",
  }
];
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

app.use(morgan('combined')); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
 // Requests processing will be defined in the file router
 app.get("/",(req,res)=>{
  res.json(
    data
  )
 })
app.get("/:id", (req, res) => {
    res.json(data[req.params.id]);
});
 app.listen(port, () => console.log('Server app listening on port ' + port));