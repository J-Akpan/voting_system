const db = require("../config/dbConfig")
const express = require("express")
const Ballot = require('../models/Ballot')


const router = express.Router()

router.get('/all', (req,res) =>
    Ballot.findAll()
       .then(ballot => {
           console.log(ballot)
           res.sendStatus(200)   
       })
       .catch(err => console.log(err))

)



module.exports = router