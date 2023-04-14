const Sequelize = require('sequelize');

const HotelPicture = require('./t_hotelpicture');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_hotel', {
    HotelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Adress: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    Floors: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Stars: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    },
    HotelPictureID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: HotelPicture,
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 't_hotel',
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
