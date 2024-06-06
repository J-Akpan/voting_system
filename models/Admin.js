const Sequelize = require('sequelize');
const db = require("../config/dbConfig")


 //create model
 const Admin = db.define('Admin',{
    adminId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false  
    },

    ballotId: {
        type: Sequelize.STRING,
        allowNull: false
    },

    candidateId: {
        type: Sequelize.STRING,
        allowNull: false
    },

    voterId: {
        type: Sequelize.STRING,
        allowNull: false

    },

    electionId: {
        type: Sequelize.STRING,
        allowNull: false

    },

    email: {
        type: Sequelize.STRING,
        allowNull: false

    },

    passwords: {
        type: Sequelize.STRING,
        allowNull: false

    },

    username: {
        type: Sequelize.STRING,
        allowNull: false

    },

    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },



})

module.exports = Admin