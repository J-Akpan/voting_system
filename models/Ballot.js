const Sequelize = require('sequelize');
const db = require("../config/dbConfig")

    //create model
    const Ballot = db.define('Ballot',{
        ballotId: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
            
        },
        electionId: {
            type: Sequelize.STRING,
            allowNull: false

        },

        voterId: {
            type: Sequelize.STRING,
            allowNull: false

        },

        candidateId: {
            type: Sequelize.DATE,
            allowNull: false,
        },

        choiceVote: {
            type: Sequelize.DATE,
            allowNull: false,
        },

        adminId: {
            type: Sequelize.STRING,
            allowNull: false
        },

    })

    
module.exports = Ballot