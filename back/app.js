const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require ('mysql');
const app = express();
const connection = require('./helpers/connect.js')
/////////// Middleware/////////////////////

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





////////////Routes//////////////////////

app.get('/', (req, res) => {
 res.send('ok');
})


//////////CONNECT MYSQL//////////////
connection.connect( (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('succès')
    }
})

connection.query('SELECT * FROM profile', (error, results, fields)=>{
    if(!!error){
        console.log(error)
    }else {
        console.log('ok')
    }
})



////////////////Port server//////////////////////

app.listen(8080, console.log('je suis connecté'))
