const Sequelize = require('sequelize');
const db = require("../config/dbConfig")

    //create model
    const Voters = db.define('Voter',{
        voterId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false

        },

        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        address: {
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

    
    })

    
module.exports = Voters