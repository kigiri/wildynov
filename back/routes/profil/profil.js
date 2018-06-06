const express = require('express');
const router = express.Router();
const db = require('../..helpers/db.js');


router.post('/connexion', (req, res) => {
    res.send('ok')
})

router.post('/inscription', (req, res) => {
    res.send('ok')
})

router.get('/:id', (req, res) => {
    res.send('ok')
})

