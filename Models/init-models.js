var DataTypes = require("sequelize").DataTypes;
var _t_booking = require("./t_booking");
var _t_extrashotel = require("./t_extrashotel");
var _t_extrasroom = require("./t_extrasroom");
var _t_hotel = require("./t_hotel");
var _t_hotelpicture = require("./t_hotelpicture");
var _t_reviewpicture = require("./t_reviewpicture");
var _t_reviews = require("./t_reviews");
var _t_room = require("./t_room");
var _t_roompicture = require("./t_roompicture");
var _t_roomtype = require("./t_roomtype");
var _t_services = require("./t_services");
var _t_user = require("./t_user");

function initModels(sequelize) {
  var t_booking = _t_booking(sequelize, DataTypes);
  var t_extrashotel = _t_extrashotel(sequelize, DataTypes);
  var t_extrasroom = _t_extrasroom(sequelize, DataTypes);
  var t_hotel = _t_hotel(sequelize, DataTypes);
  var t_hotelpicture = _t_hotelpicture(sequelize, DataTypes);
  var t_reviewpicture = _t_reviewpicture(sequelize, DataTypes);
  var t_reviews = _t_reviews(sequelize, DataTypes);
  var t_room = _t_room(sequelize, DataTypes);
  var t_roompicture = _t_roompicture(sequelize, DataTypes);
  var t_roomtype = _t_roomtype(sequelize, DataTypes);
  var t_services = _t_services(sequelize, DataTypes);
  var t_user = _t_user(sequelize, DataTypes);


  return {
    t_booking,
    t_extrashotel,
    t_extrasroom,
    t_hotel,
    t_hotelpicture,
    t_reviewpicture,
    t_reviews,
    t_room,
    t_roompicture,
    t_roomtype,
    t_services,
    t_user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
