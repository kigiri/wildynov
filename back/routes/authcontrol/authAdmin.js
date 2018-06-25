const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const jwtSecret = require('../../../jwtSecret')

const getToken = (req) => {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		return req.headers.authorization.split(' ')[1]
	} else if (req.query && req.query.token) {
		return req.query.token
	}
	return null
}

router.post('/login', [ check('email').isEmail() ], (req, res) => {
	const password = req.body.password
	const email = req.body.email

	////////check if mail is valide ////////
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(422).json({ errors: validationErrors.array() })
	}
	///////////////////////////////////////////

	//////check into database if password and mail match //////////////

	connection.query('SELECT * FROM profile WHERE email = ?', [ email ], function(selectError, results, fields) {
		if (selectError) {
			// console.log("error ocurred",error);
			res.send({
				code: 400,
				failed: 'error ocurred'
			})
		} else if (results.length < 1) {
			res.send({
				code: 204,
				success: 'Email does not exits'
			})
		} else {
			bcrypt.compare(password, results[0].password, function(bcryptError, validPassword) {
				if (!validPassword || bcryptError) {
					res.send({
						code: 204,
						success: 'Email and password does not match'
					})
				} else {
					res.send({
						code: 200,
						success: 'login sucessfull'
					})
				}
			})
		}
	})
})

Router.post('/protected', (req, res, next) => {
	const token = getToken(req)
	const objectTests = {
		//data appeler par la bdd
		test: 'ok'
	}
	jwt.verify(token, jwtSecret, (err, decoded) => {
		if (err) {
			console.log(err)
			return res.status(200).send({ mess: 'na pas acces au donnes' })
		}
		console.log('decode', decoded)
		return res.status(200).send({ mess: 'Donne du user', objectTests })
	})
})

module.exports = router
