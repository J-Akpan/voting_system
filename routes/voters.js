const Joi = require("joi");
const db = require("../config/dbConfig");
const express = require("express");
const Voter = require("../models/Voters");
const { where } = require("sequelize");
const router = express.Router();

//voters login
router.get("/login", (req, res) => {
  // const render the login page
  res.send("Welcome to the voters login page");
});

//login handler

router.post("/login", (req, res) => {
  const { email, passwords } = req.body;
  const schema = Joi.object({
    email: Joi.string().required().email(),
    passwords: Joi.string().required(),
  });
  const check = schema.validate(req.body);

  //check for error
  if (check.error) {
    res.status(404).send(check.error.details[0].message);
  } else {
    const voterData = Voter.findAll({
      where: {
        email: req.body.email,
        passwords: req.body.passwords,
      },
    });

    if (!voterData) {
      res.status(404).send("Vote does not exist on voters database");
      console.log(error);
      return;
    } else {
      console.log(voterData);
      res.status(200).send(`successfull `);
    }
  }
});

//voters registration
router.post("/register", (req, res) => {
  const {
    voterId,
    firstname,
    lastname,
    email,
    passwords,
    phone,
    address,
    state,
    lga,
    ward,
  } = req.body;

  // val?idate fields

  const schema = Joi.object({
    voterId: Joi.string().min(3).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().min(3).required().email(),
    passwords: Joi.string().required(),
    phone: Joi.string(),
    address: Joi.string().required(),
    state: Joi.string().required(),
    lga: Joi.string().required(),
    ward: Joi.string().required(),
  });
  const result = schema.validate(req.body);

  //errors check
  if (result.error) {
    res.status(404).send(result.error.details[0].message);
  } else {
    Voter.create({
      voterId,
      firstname,
      lastname,
      email,
      passwords,
      phone,
      address,
      state,
      lga,
      ward,
    })
      .then(res.send("voter registeration successfull"))
      .catch((err) => console.log(err));
  }
});

//routr to update voters details
router.put("/update", (req, res) => {
  const {
    voterId,
    firstname,
    lastname,
    email,
    passwords,
    phone,
    address,
    state,
    lga,
    ward,
  } = req.body;

  const schema = Joi.object({
    voterId: Joi.string().min(5).required(),
  });
  const Validation = schema.validate(req.body);
  if (Validation.error) {
    res.status(404).send(Validation.error.details[0].message);
    return;
  } else {
    const update = Voter.update({
      voterId,
      firstname,
      lastname,
      email,
      passwords,
      phone,
      address,
      state,
      lga,
      ward,

      where: {
        voterId: req.body.voterId,
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
 
}); //end of route

module.exports = router;
