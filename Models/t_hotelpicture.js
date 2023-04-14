const Sequelize = require('sequelize');

const Hotel = require('./t_hotel');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_hotelpicture', {
    HotelPictureID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HotelPicture: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    HotelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Hotel,
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 't_hotelpicture',
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
