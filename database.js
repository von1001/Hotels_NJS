const{Sequelize} = require('sequelize');

const sequelize = new Sequelize('hotels', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;