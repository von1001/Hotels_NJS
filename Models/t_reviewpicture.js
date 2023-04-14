const Sequelize = require('sequelize');

const Reviews = require('./t_reviews');
const HotelPicture = require('./t_hotelpicture');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_reviewpicture', {
    ReviewPictureID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReviewID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Reviews,
        key: 'ReviewID'
      }
    },
    HotelPictureID: {
      type: DataTypes.BLOB,
      allowNull: false,
      references: {
        model: HotelPicture,
        key: 'HotelPictureID'
      }
    }
  }, {
    sequelize,
    tableName: 't_reviewpicture',
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
