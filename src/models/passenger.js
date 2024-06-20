const {Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db_config');

const Passenger = db.define('passenger', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false,
      },
});

module.exports = Passenger;
