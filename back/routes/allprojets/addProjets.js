const express = require('express');
const router = express.Router();
const connection = require('../../helpers/connect.js');




router.post('/addPojets', (req, res) => {
    
const data = Object.values(req.body)
const INSERT_PROJETS_QUERY = `INSERT INTO project (id_profile, id, title, 
                                deadline_project, deadline_application, 
                                description, state, created_at, updated, name, 
                                first_name, year, campus, password, email, skill, 
                                created_at_profile, updated_at)
                            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

    connection.query (INSERT_PROJETS_QUERY,data,(err, results) => {
    if (err){
        res.send(err);
        }
        else{ 
            return res.send({
                results
            })
        }
    
    })
})
module.exports = router;


