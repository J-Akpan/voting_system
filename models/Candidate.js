const Sequelize = require('sequelize');
const db = require("../config/dbConfig")

    //create model
    const Candidate = db.define('Candidate',{
        candidateId: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
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

        passwords: {
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

        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        lga: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        ward: {
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

    
module.exports = Candidate