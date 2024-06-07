const Sequelize = require('sequelize');
const db = require("../config/dbConfig");
const Voter = require('../models/Voters')
const Election = require('../models/Election')
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

//Associate Admin with Voter Model
Admin.hasMany(Voter);
Voter.belongsTo(Admin);

// Associat Admin with Election model
Admin.hasMany(Election);
Election.belongsTo(Admin);

module.exports = Admin