const db = require("../config/dbConfig")
const express = require("express")
const Voter = require('../models/Voters')
const router = express.Router()

// //get all voters
router.get('/all', (req,res) =>
     Voter.findAll()
        .then(voters => {
            console.log(voters)
            res.sendStatus(200)   
        })
        .catch(err => console.log(err))

)

//voters login
router.get('/login', (req, res) =>{
    // const voters = Voters.findAll()
    // console.log(voters)
    res.send('Welcome to the voters login page')
})

//login handler
router.post('/login', (req,res)=>{
    res.send('login Handler')

})


//voters registration
router.post('/register', (req, res) =>{
    const {firstname, lastname, email, phone, address, state, lga, ward } = req.body
    
    // val?idate fields
    let errors = [];

    if(!firstname)
        errors.push({msg: 'Please type in you firstname'})

    if(!lastname)
        errors.push({msg: 'Please type in you lastname'})

    if(!email)
        errors.push({msg: 'Please type in you email'})

    if(!phone)
        errors.push({msg: 'Please type in you phone'})

    if(!address)
        errors.push({msg: 'Please type in you address'})

    if(!state)
        errors.push({msg: 'Please type in you state'})

    if(!lga)
        errors.push({msg: 'Please type in you LGA'})

    if(!ward)
        errors.push({msg: 'Please type in you ward'})

    //errors check
    if (errors.length > 0){
        res.send('sosme fields are empty')
    }else{
        Voter.create({
            firstname,
            lastname,
            email,
            phone,
            address,
            state,
            lga,
            ward
            
        })
            .then(res.send('voter registeration successfull'))
            .catch(err => console.log(err))

    }
    
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