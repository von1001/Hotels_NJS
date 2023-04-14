const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const hotelController = require("../Controllers/HotelController");
    const router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], hotelController.create);

    router.put("/:ID", [authJwt.verifyToken, authJwt.isAdmin], hotelController.update);

    router.get("/", hotelController.findAll);
    router.get("/:ID", hotelController.findById);
    router.get("/pictures/:HotelID", hotelController.findPicsByHotel); //Найти картинку по отелю

    router.delete("/:ID", [authJwt.verifyToken, authJwt.isAdmin], hotelController.delete);
    
    app.use("/hotel", router);
}