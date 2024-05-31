const { Sequelize, DataTypes } = require('sequelize');
const express = require("express")
const CONFIG = require("../config/dbConfig")



const router = express.Router()

// voters models
const Voter = require('../models/Voters');
const Voters = require('../models/Voters');


//get all voters
router.get('/all',(req, res)=>{
        try {
            const voters = db.Voters.findAll()

            res.status(200).json(voters)
            
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    
   
    
})


//voters login
router.get('/login', (req, res) =>{
    // const voters = Voters.findAll()
    // console.log(voters)
    res.send('Welcome to the voters login page')
})

//login handler
router.post('/login', (req,res)=>{
    console.log(req.body)
    res.send('login success')
})





//voters registration
router.get('/register', (req, res) =>{
    res.send('Welcome to the voters resitration page')
})

//voters accreditation
router.get('/accreditation', (req, res) =>{
    res.send('Welcome to the voters accreditatiopn page')
})

//voters vote casting
router.get('/vote', (req, res) =>{
    res.send('Welcome to the voters casting page')
})





module.exports = router