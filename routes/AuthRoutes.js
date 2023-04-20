const verifySignUp = require("../middleware/verifySignUp");
const controller = require("../Controllers/AuthController");

module.exports = function(app) {
    app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    
    });
    
    app.post(
    "/auth/signup",
    [
        verifySignUp.checkDuplicateUsername,
        verifySignUp.checkRoleExisted
    ],
    controller.signup
    );

    app.post("/auth/signup", controller.signin);
    
};