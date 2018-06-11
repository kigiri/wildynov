const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require ('mysql');
const app = express();
const profilRouter = require('./routes/profil/profil.js')
const connection = require('./helpers/connect.js')
const cors = require('cors')
const morgan = require('morgan');

/////////// Middleware/////////////////////
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

////////////ROUTING////////////////////////

app.use('/profil', profilRouter)



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




////////////////Port server//////////////////////

app.listen(8080, console.log('je suis connecté'))
