const db = require("../config/dbConfig");
const express = require("express");
const Candidate = require("../models/Candidate");
const Joi = require("joi");

const router = express.Router();

// candidate login route
router.post("/login", (req, res) => {

  const schema = Joi.object({
    email: Joi.string().required().email(),
    passwords: Joi.string().required(),
  });
  const check = schema.validate(req.body);

  //check for error
  if (check.error) {
    res.status(404).send(check.error.details[0].message);
  } else {
    const candidateData = Candidate.findAll({
      where: {
        email: req.body.email,
        passwords: req.body.passwords,
      },
    });

    if (!candidateData) {
      res.status(404).send("Vote does not exist on voters database");
      console.log(error);
      return;
    } else {
      console.log(candidateData);
      res.status(200).send(`successfull `);
    }
  }
});


// candidate registration
router.post("/register", (req, res) => {
    const {
      candidateId,
      electionId,
      firstname,
      lastname,
      email,
      passwords,
      profile,
      party,
      state,
      lga,
      ward,
      address,
      phone,
    } = req.body;
  
    // val?idate fields
  
    const schema = Joi.object({
      candidateId: Joi.string().min(3).required(),
      electionId: Joi.string().min(3).required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().min(3).required().email(),
      passwords: Joi.string().required(),
      profile: Joi.string().required(),
      party: Joi.string().min(3).required(),
      state: Joi.string().required(),
      lga: Joi.string().required(),
      ward: Joi.string().required(),
      address: Joi.string().required(),
      phone: Joi.string().required(),
    });
    const result = schema.validate(req.body);
  
    //errors check
    if (result.error) {
      res.status(404).send(result.error.details[0].message);
    } else {
      Candidate.create({
        candidateId,
        electionId,
        firstname,
        lastname,
        email,
        passwords,
        profile,
        party,
        state,
        lga,
        ward,
        address,
        phone
      })
        .then(res.send("candidate registeration successfull"))
        .catch((err) => console.log(err));
    }
  });
  


  //update data rout
  router.put("/update", (req, res) => {
    const {
      candidateId,
      electionId,
      firstname,
      lastname,
      email,
      passwords,
      profile,
      party,
      state,
      lga,
      ward,
      address,
      phone,
    } = req.body;
  
    const schema = Joi.object({
      candidateId: Joi.string().min(5).required(),
    });
    const Validation = schema.validate(req.body);
    if (Validation.error) {
      res.status(404).send(Validation.error.details[0].message);
      return;
    } else {
      const update = Candidate.update({
        candidateId,
        electionId,
        firstname,
        lastname,
        email,
        passwords,
        profile,
        party,
        state,
        lga,
        ward,
        address,
        phone,
  
        where: {
          candidateId: req.body.candidateId,
        },
      });
  
      if (!update) {
        res.status(400).send("update not successfull");
        return;
      } else {
        console.log(update);
        res.send("success");
      }
    }
   
  });





module.exports = router;
