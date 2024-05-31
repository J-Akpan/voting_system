const Sequelize = require('sequelize')
const db = require("../config/dbConfig")
const express = require("express")
const Voter = require('../models/Voters')


const router = express.Router()

// //get all voters
// router.get('/all', (req,res) =>{
//     const voter = db.voters.findAll()

// })

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