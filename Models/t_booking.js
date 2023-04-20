const sequelize = require('sequelize');

const Room = require('./t_room');
const User = require('./t_user');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_booking', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'ID'
      }
    },
    ArrivalDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DepartureDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    RoomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Room,
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 't_booking',
    timestamps: false,
  });
};
