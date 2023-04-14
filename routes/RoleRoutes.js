const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const roleController = require("../Controllers/RoleController");
    const router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], roleController.create);

    router.put("/:RoleID", [authJwt.verifyToken, authJwt.isAdmin], roleController.update);

    router.get("/", roleController.findAll);
    router.get("/:RoleID", roleController.findById);
    router.get("/users/:RoleID", roleControler.findUsersByRole);

    router.delete("/:RoleID", [authJwt.verifyToken, authJwt.isAdmin], roleController.delete);
    
    app.use("/role", router);
}