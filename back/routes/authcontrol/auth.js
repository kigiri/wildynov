const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');


router.post('/signup',  (req, res) => {
 
 const emailing = req.body.email


const sql= "INSERT INTO profile (email) VALUES (?)"

    connection.query(sql, emailing, function (err, result) {
            if (err) {
                return res.status(500).json({flash: err.message })
                console.log(err)
            } else {
                res.status(200).json({ flash: "User added to database with ID"})           
            }      
        }
    );
})






router.post('/login', (req, res) => {
    res.send('ok')
})











module.exports = router;