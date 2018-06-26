const express = require('express')
const router = express.Router()
const connection = require('../../helpers/connect.js')

router.get('/projets', (req, res) => {
	const SELECT_PROJETS_QUERY = 'SELECT * FROM project'
	connection.query(SELECT_PROJETS_QUERY, (err, results) => {
		if (err) {
			return res.send(err)
		} else {
			console.log(results)

			res.status(200).send({ results })
		}
	})
})

module.exports = router
