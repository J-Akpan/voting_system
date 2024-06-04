const Joi = require("joi")
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

router.post("/login", (req, res) =>{
 
    const {email, passwords} = req.body
    if(!email || !passwords){
        res.status(404).send(`invalid email or password `)
    }else{
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
}
})
;

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
        ward: Joi.string().required()

    })
    const result = schema.validate(req.body)
  
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

//route to select voters details comparing the voters ID
router.post("/vote", (req, res) => {
    const schema = Joi.object({
        voterId: Joi.string().min(5).required()
    })
    const Validation = schema.validate(req.body)
    if (Validation.error){
        res.status(404).send(Validation.error.details[0].message)
    }
}); //end of route


//voters vote casting
router.get("/vote", (req, res) => {
    //render voters page
  res.send("Welcome to the voters casting page");
});
module.exports = router;
