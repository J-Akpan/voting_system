const Sequelize = require('sequelize');
const db = require("../config/dbConfig")

    //create model
    const Candidate = db.define('Candidate',{
        candidateId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        electionId: {
            type: Sequelize.INTEGER,
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
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        profile: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        party: {
            type: Sequelize.STRING,
            allowNull: false,
        },

      

    })

    
module.exports = Candidate