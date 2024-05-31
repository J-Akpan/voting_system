const { Sequelize } = require('sequelize');
require('../config/dbConfig')
const CONFIG = require("../config/dbConfig")

//model

module.exports = (sequelize, DataTypes) =>{
    //create model
    const Voters = sequelize.define('Voter',{
        voterId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: "voters"
    })

    return Voters
}
