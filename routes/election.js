const db = require("../config/dbConfig")
const express = require("express")
const Election = require('../models/Election')


const router = express.Router()

router.get('/all', (req,res) =>
    Election.findAll()
       .then(election => {
           console.log(election)
           res.sendStatus(200)   
       })
       .catch(err => console.log(err))

)



module.exports = router