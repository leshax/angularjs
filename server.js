var express = require('express');
var app = express();
var data = [
 {
   "name": "Poland",
   "isoCode": "POL"
 },
 {
   "name": "Portugal",
   "isoCode": "PRT"
 },
 {
   "name": "Romania",
   "isoCode": "RO"
 },
 {
   "name": "Switzerland",
   "isoCode": "CH"
 }
];

app.use(express.json());

app.get('/country', (req, res) => {
  try{
    //throw 500;
    if(!req.query.search){
      res.sendStatus(404); return;
    }
    var s = req.query.search.toLowerCase();
    console.log("Search..." + s);
    var filtered = data.filter(obj => obj["name"].toLowerCase().includes(s));
    res.send(JSON.stringify(filtered)); return;
  } catch(e){
    console.error("/county Server error: ", e);
    res.sendStatus(500); return;
  }
});

app.post('/selectedCountries',function(req,res){
  try{
    console.log(req.body);
    console.log(req.query);
    res.send(200); return;
  } catch(e) {
    console.error("/selectedCountries Server error: ", e);
    res.sendStatus(500); return;
  }
});

app.use(express.static('./'));

app.listen(3000);
