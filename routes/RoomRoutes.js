const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const roomController = require("../Controllers/RoomController");
    const router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], roomController.create);

    router.put("/:RoomID", [authJwt.verifyToken, authJwt.isAdmin], roomController.update);

    router.get("/", roomController.findAll);
    router.get("/:RoomID", roomController.findById);
    router.get("/service/:RoomTypeID", roomController.findServiceByRoomType);
    router.get("/room/:RoomID", roomController.findRoomByRoomType);

    router.delete("/:RoomID", [authJwt.verifyToken, authJwt.isAdmin], roomController.delete);
    
    app.use("/room", router);
}