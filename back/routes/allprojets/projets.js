const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');

const SELECT_PROJETS_QUERY = 'SELECT * FROM projet'
router.get('/projets', (req, res) => {

   connection.query(SELECT_PROJETS_QUERY, (err, results) => {
    if(err) {
           return res.send(err)
       }
       else;{ 
           return res.json({
               data: results
           })
       }
   })
})

module.exports = router;


