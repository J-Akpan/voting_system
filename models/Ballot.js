const Sequelize = require('sequelize');
const db = require("../config/dbConfig")

    //create model
    const Ballot = db.define('Ballot',{
        electionId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        electionId: {
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

    })

    
module.exports = Ballot