const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator/check')



router.post('/signup', [check('email').isEmail()], (req, res) => {

 const emailing = req.body.email

 ////////////verif if email valide /////////////
 
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }


////////////INSERT DATA ////////////////////////////////////

    const randomPass = Math.random().toString(36).slice(-8); ///////RANDOM PASSWORD////
    const sql = `INSERT INTO profile (email, password) VALUES (?,?)` ///////INSERT VALUE MYSQL//////
   


    connection.query(sql, [emailing, randomPass], function(err, result) {
        if (err) {
            return res.status(500).json({
                flash: err.message
            })
   
        } else {
            //////////MAILING /////////////
            
            nodemailer.createTestAccount((err, account) => {
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    service: 'Hotmail',
                    port: 465,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: 'wildtest75@hotmail.com', // generated ethereal user
                        pass: 'wildcodeschool2018' // generated ethereal password
                    },

                });

                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Fred Foo 👻" <wildtest75@hotmail.com>', // sender address
                    to: emailing, // list of receivers
                    subject: 'Hello ✔', // Subject line
                    text: 'Hello world?', // plain text body
                    html: `<p>Voici votre mot de passe de connexion :${randomPass}</p>`, // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


                });
            });

            res.status(200).json({
                flash: "Votre profil a bien été enregistré"
            })
            console.log(result)
        }
    })
})



router.post('/login',[check('email').isEmail()], (req, res) => {

 const password = req.body.password
const email = req.body.email
  
////////check if mail is valide ////////
const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
///////////////////////////////////////////


//////check into database if password and mail match //////////////

  connection.query('SELECT * FROM profile WHERE email = ?', [email], function(error, results, fields) {

  if (error) {
      // console.log("error ocurred",error);

      res.send({
          "code": 400,
          "failed": "error ocurred"
      })

  } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
          if (results[0].password == password) {
              res.send({
                  "code": 200,
                  "success": "login sucessfull"
              });
          } else {
              res.send({
                  "code": 204,
                  "success": "Email and password does not match"
              });
          }
      } else {
          res.send({
              "code": 204,
              "success": "Email does not exits"
          });
      }
  }
  });
  })






module.exports = router;