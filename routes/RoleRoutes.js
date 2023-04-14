module.exports = app => {
    const roleController = require("../Controllers/RoleController");
    const router = require("express").Router();
    
    router.post("/", roleController.create);

    router.put("/:RoleID", roleController.update);

    router.get("/", roleController.findAll);
    router.get("/:RoleID", roleController.findById);
    router.get("/users/:RoleID", roleControler.findUsersByRole);

    router.delete("/:RoleID", roleController.delete);
    
    app.use("/role", router);
}