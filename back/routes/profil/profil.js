const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');


router.post('/signup',  (req, res) => {
//    const name = req.body.name   
 const email = req.body.email
//  const firstName = req.body.first_name
//  const year = req.body.year
//  const campus = req.body.campus
//   const password = req.body.password
//     const skill = req.body.skill

    connection.query(`INSERT INTO profile (email)
VALUES (?)`,
    [email],
        function (err, result) {
            if (err) {
                return res.status(500).json({flash: err.message })
                console.log(err)
            } else {
                res.status(200).json({ flash: "User added to database with ID"})
                
            }
            console.log(err)
        }
    );
})






router.post('/login', (req, res) => {
    res.send('ok')
})











module.exports = router;