const Sequelize = require('sequelize');
require ("dotenv").config()


const CONFIG = {
    DB_name: process.env.DB_name,
    DB_username: process.env.DB_username,
    DB_password: process.env.DB_password,
    DB_dialect: process.env.DB_dialect,
    DB_host: process.env.DB_host
}

//databse connection
const db = new Sequelize(
    CONFIG.DB_name, 
    CONFIG.DB_username, 
    CONFIG.DB_password, 
    {
        host: CONFIG.DB_host,
        dialect: CONFIG.DB_dialect
  });

  //test db connection
  db.authenticate()
    .then(()=>{
        console.log("database connection successfull")
    }).catch((err)=>{
        console.log(err)
    })

   
    //sync databse
    db.sync({force: false})
        .then(()=>{
            console.log('table sync successfull')
        }).catch((err)=>{
            console.log(err)
        })




module.exports = db