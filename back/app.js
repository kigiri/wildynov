const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require ('mysql');
const app = express();

// Middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





//Routes

app.get('/', (req, res) => {
 res.send('ok');
})



//Port server

app.listen(8080, console.log('je suis connecté'))
