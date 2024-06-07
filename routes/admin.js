const db = require("../config/dbConfig");
const express = require("express");
const Admin = require("../models/Admin");
// const Ballot = require('../models/Ballot')
// const Candidate = require("../models/Candidate");
// const Election = require('../models/Election')
// const Voter = require("../models/Voters");
const Joi = require("joi");
const Election = require("../models/Election");

const router = express.Router();



//login handler

router.post("/login", (req, res) => {
    const {email, passwords, adminId} = req.body
    const schema = Joi.object({
      email: Joi.string().required().email(),
      passwords: Joi.string().required(),
      adminId: Joi.string().required()
    });

    const check = schema.validate(req.body);
  
    //check for error
    if (check.error) {
      res.status(404).send(check.error.details[0].message);
    } else {
      const adminData = Admin.findAll({
        where: {
          email: req.body.email,
          passwords: req.body.passwords,
          adminId: req.body.adminId
        },
      });
  
      if (!adminData) {
        res.status(404).send(" You are not an admin");
        console.log(error);
        return;
      } else {
        console.log(adminData);
        res.status(200).send(`successfull `);
      }
    }
  });
  
  
//delete voter

router.post("/deletevolter", (req, res) => {
    const {voterId} = req.body
    const schema = Joi.object({
      voterId: Joi.string().required()
    });

    const check = schema.validate(req.body);
  
    //check for error
    if (check.error) {
      res.status(404).send(check.error.details[0].message);
    } else {
      const adminData = voterId.destroy({
        where: {
          voterId: req.body.voterId
        },
      });
  
      if (!adminData) {
        res.status(404).send(" You are not an admin");
        console.log(error);
        return;
      } else {
        console.log(adminData);
        res.status(200).send(`successfull `);
      }
    }
  });


  //election query using the admin
router.get('/election-query', (req, res) =>{
  const electionQuery = Admin.findAll({ include: Election });

  if(!electionQuery){
    res.status(404).send('failed')
  }else{
    res.status(200).send(error)
  }

  
})

module.exports = router;