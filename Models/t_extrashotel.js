const sequelize = require('sequelize');

const Hotel = require('./t_hotel');
const Service = require('./t_services');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_extrashotel', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HotelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Hotel,
        key: 'ID'
      }
    },
    ServiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Service,
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 't_extrashotel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
