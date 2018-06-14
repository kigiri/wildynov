const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');
const nodemailer = require('nodemailer')




router.post('/signup', (req, res) => {

    const randomPass = Math.random().toString(36).slice(-8); ///////RANDOM PASSWORD////
    const sql = `INSERT INTO profile (email, password) VALUES (?,?)` ///////INSERT VALUE MYSQL//////
    const emailing = req.body.email


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



router.post('/login', (req, res) => {
    res.send('ok')
});




module.exports = router;