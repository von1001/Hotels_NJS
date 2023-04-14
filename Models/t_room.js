const sequelize = require('sequelize');

const RoomType = new sequelize('./t_roomtype');
const RoomPicture = new sequelize('./t_roompicture');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_room', {
    RoomID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoomTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RoomType,
        key: 'ID'
      }
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RoomPictureID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RoomPicture,
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 't_room',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoomID" },
        ]
      },
    ]
  });
};
