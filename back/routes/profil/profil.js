const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');


router.post('/connexion', (req, res) => {
    res.send('ok')
})

router.post('/inscription', (req, res) => {
    res.send('ok')
})

router.get('/:id', (req, res) => {
const id = req.params.id
    res.send(id)
})







module.exports = router;