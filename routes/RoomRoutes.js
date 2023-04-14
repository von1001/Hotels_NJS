module.exports = app => {
    const roomController = require("../Controllers/RoomController");
    const router = require("express").Router();
    
    router.post("/", roomController.create);

    router.put("/:RoomID", roomController.update);

    router.get("/", roomController.findAll);
    router.get("/:RoomID", roomController.findById);
    router.get("/service/:RoomTypeID", roomController.findServiceByRoomType);
    router.get("/:room/:RoomID", roomController.findRoomByRoomType);

    router.delete("/:RoomID", roomController.delete);
    
    app.use("/room", router);
}