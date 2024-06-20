const Sequelize = require('sequelize');
const db = require('../config/db_config');

const Ride = db.define('ride', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      driverId: {
        type: DataTypes.INTEGER,
        references: {
          model: Driver,
          key: 'id',
        },
      },
      passengerId: {
        type: DataTypes.INTEGER,
        references: {
          model: Passenger,
          key: 'id',
        },
      },
      status: {
        type: DataTypes.ENUM('pending', 'accepted', 'completed', 'cancelled'),
        defaultValue: 'pending',
      },

});

module.exports = Ride;
