const Sequelize = require('sequelize');
const db = require("../config/dbConfig")

    //create model
    const Election = db.define('Election',{
        electionId: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        electionName: {
            type: Sequelize.STRING,
            allowNull: false

        },

        startDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },

        endDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },

        adminId: {
            type: Sequelize.STRING,
            allowNull: false
        },

    })

    
module.exports = Election