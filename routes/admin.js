const db = require("../config/dbConfig");
const express = require("express");
const Admin = require("../models/Admin");
const Joi = require("joi");
const Election = require("../models/Election");
const Candidate = require("../models/Candidate");
const Voters = require("../models/Voters");
const Ballot = require("../models/Ballot");
const router = express.Router();

//login handler

router.post("/login", (req, res) => {
  const { email, passwords, adminId } = req.body;
  const schema = Joi.object({
    email: Joi.string().required().email(),
    passwords: Joi.string().required(),
    adminId: Joi.string().required(),
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
        adminId: req.body.adminId,
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
  const { voterId } = req.body;
  const schema = Joi.object({
    voterId: Joi.string().required(),
  });

  const check = schema.validate(req.body);

  //check for error
  if (check.error) {
    res.status(404).send(check.error.details[0].message);
  } else {
    const adminData = voterId.destroy({
      where: {
        voterId: req.body.voterId,
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

//election query using the admin Association
router.get("/election-query", (req, res) => {
  const { electionId } = req.body;
  const schema = Joi.object({
    electionId: Joi.string().required(),
  });

  const check = schema.validate(req.body);

  //validete error
  if (check.error) {
    res.status(404).send(check.error.details[0].message);
  } else {
    const electionQuery = Admin.findAll({
      where: {
        electionId: req.body.electionId,
      },
      include: Election,
    }); //end of query

    if (!electionQuery) {
      res.status(404).send("failed");
    } else {
      res.status(200).send(electionQuery);
    }
  }
});

//voter query using the admin Association
router.get("/voter-query", (req, res) => {
  const { voterId } = req.body;

  //joi validation
  const schema = Joi.object({
    voterId: Joi.string().required(),
  });

  const check = schema.validate(req.body);
  if (check.error) {
    res.status(404).send(check.error.details[0].message);
  } else {
    const voterQuery = Admin.findAll({ include: Voters });
    res.send(voterQuery);
  }
});

//ballot query using the admin Association
router.get("/ballot-query", (req, res) => {
  const { ballotId } = req.body;

  const schema = Joi.object({
    ballotId: Joi.string().required(),
  });

  const check = schema.validate(req.body);
  if (check.error) {
    res.status(404).send(check.error.details[0].message);
  } else {
    const ballotQuery = Admin.findAll({ include: Ballot });
    if (!ballotQuery) {
      res.send("Information not found");
    } else {
      res.send(ballotQuery);
    }
  }
});

//ballot query using the admin Association
router.get("/candidate-query", (req, res) => {
  const { candidateId } = req.body;

  const schema = Joi.object({
    candidateId: Joi.string().required(),
  });

  const check = schema.validate(req.body);
  if (check.error) {
    res.send(check.error.details[0].message);
  } else {
    const candidateQuery = Admin.findAll({ include: Candidate });
    res.send(candidateQuery);

    if (!candidateQuery){
      res.send('no candidate information')
    }
  }
});




router.delete("/delete-ballot", (req,res) =>{
  // const ballotDelete = Admin.destroy() 
})

module.exports = router;
