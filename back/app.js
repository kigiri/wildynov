const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require ('mysql');
const app = express();
const profilRouter = require('./routes/authcontrol/auth.js')
const connection = require('./helpers/connect.js')
const cors = require('cors')
const morgan = require('morgan');

/////////// Middleware/////////////////////
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

////////////ROUTING////////////////////////

app.use('/auth', profilRouter)



////////////Routes//////////////////////

app.get('/', (req, res) => {
 res.send('Projet  ynov');
})


//////////CONNECT MYSQL//////////////
connection.connect( (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Base de données connecté')
    }
})

<<<<<<< HEAD
=======
connection.query('SELECT * FROM profile', (error, results, fields)=>{
    if(!!error){
        console.log(error)
    }else {
        console.log('connecté')
    }
})
>>>>>>> f0d47709e9fc368fd1e88c556e13cc8473aa3a1a



////////////////Port server//////////////////////

app.listen(8080, console.log('Je suis connecté sur le port 8080'))
