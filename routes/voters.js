const db = require("../config/dbConfig");
const express = require("express");
const Voter = require("../models/Voters");
const router = express.Router();

// //get all voters
router.get("/all", (req, res) =>
  Voter.findAll()
    .then((voters) => {
      console.log(voters);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

//voters login
router.get("/login", (req, res) => {
  // const render the login page
  res.send("Welcome to the voters login page");
});

//login handler

router.post("/login", (req, res) =>
     Voter.findAll({
    where: {
      email: req.body.email,
      passwords: req.body.passwords,
    },
  }

)
    .then((voters) => {
      console.log(voters);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

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
  let errors = [];
  if (!voterId) errors.push({ msg: "Please type in you voter" });

  if (!firstname) errors.push({ msg: "Please type in you firstname" });

  if (!lastname) errors.push({ msg: "Please type in you lastname" });

  if (!email) errors.push({ msg: "Please type in you email" });

  if (!passwords) errors.push({ msg: "Please type in you password" });

  if (!phone) errors.push({ msg: "Please type in you phone" });

  if (!address) errors.push({ msg: "Please type in you address" });

  if (!state) errors.push({ msg: "Please type in you state" });

  if (!lga) errors.push({ msg: "Please type in you LGA" });

  if (!ward) errors.push({ msg: "Please type in you ward" });

  //errors check
  if (errors.length > 0) {
    res.send("some fields are empty");
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

//voters vote casting
router.get("/vote", (req, res) => {
    //render voters page
  res.send("Welcome to the voters casting page");
});

module.exports = router;
