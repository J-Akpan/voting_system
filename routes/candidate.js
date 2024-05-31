const db = require("../config/dbConfig")
const express = require("express")
const Candidate = require('../models/Candidate')


const router = express.Router()

router.get('/all', (req,res) =>
    Candidate.findAll()
       .then(candidate => {
           console.log(candidate)
           res.sendStatus(200)   
       })
       .catch(err => console.log(err))

)



module.exports = router