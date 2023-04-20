const db = require("../database");
const ROLES = require("../Models/t_role");
const User = require("../Models/t_user");

checkDuplicateUsername = (req, res, next) => {
	User.findOne({
		where: {
			nick: req.body.username
		}
	}).then(user => {
		if (user) {
			res.status(400).send({
				message: "Failed! Username is already in use!"
			});
			return;
		}
		next();
	});
};

checkRoleExisted = (req, res, next) => {
	if (req.body.role) {
		ROLES.findOne({ where: { name: req.body.role } }).then(data => {
			if (!data) {
				res.status(400).send({
					message: "Failed! Role does not exist = " + req.body.role
				});
				return;
			}
		})
	}
	next();
};


const verifySignUp = {
	checkDuplicateUsername: checkDuplicateUsername,
	checkRoleExisted: checkRoleExisted,
}

module.exports = verifySignUp;