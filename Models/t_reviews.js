const Sequelize = require('sequelize');

const ReviewPicture = require('./t_reviewpicture');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_reviews', {
    ReviewID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BookingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Opinion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Rating: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    },
    ReviewPictureID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ReviewPicture,
        key: 'ReviewPictureID'
      }
    }
  }, {
    sequelize,
    tableName: 't_reviews',
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
