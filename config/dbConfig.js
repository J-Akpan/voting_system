const { Sequelize, DataTypes } = require('sequelize');
require ("dotenv").config()
require('../models/Voters')




const CONFIG = {
    DB_name: process.env.DB_name,
    DB_username: process.env.DB_username,
    DB_password: process.env.DB_password,
    DB_dialect: process.env.DB_dialect,
    DB_host: process.env.DB_host
}

//databse connection
const sequelize = new Sequelize(
    CONFIG.DB_name, 
    CONFIG.DB_username, 
    CONFIG.DB_password, 
    {
        host: CONFIG.DB_host,
        dialect: CONFIG.DB_dialect
  });

  //test db connection
  sequelize.authenticate()
    .then(()=>{
        console.log("database connection successfull")
    }).catch((err)=>{
        console.log(err)
    })

    const db = {}

    db.sequelize = sequelize
    db.Sequelize = Sequelize


    // adding models
    db.Voters = require('../models/Voters')(sequelize,DataTypes)
    // db.voteRoute = require('../routes/voters')(sequelize,DataTypes)
    

   



    

    //sync databse
    db.sequelize.sync({force: false})
        .then(()=>{
            console.log('table sync successfull')
        }).catch((err)=>{
            console.log(err)
        })




module.exports = {
    CONFIG,
    db

}