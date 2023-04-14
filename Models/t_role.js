const db = require('../database.js');
const Sequelize = require('sequelize');

const Role = db.define('role', {
	RoleID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	Roles: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {
	timestamps: false
});

module.exports = Role;