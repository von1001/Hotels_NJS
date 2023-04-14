module.exports = app => {
    const hotelController = require("../Controllers/HotelController");
    const router = require("express").Router();

    router.post("/", hotelController.create);

    router.put("/:ID", hotelController.update);

    router.get("/", hotelController.findAll);
    router.get("/:ID", hotelController.findById);
    router.get("/pictures/:HotelID", hotelController.findPicsByHotel);

    router.delete("/:ID", hotelController.delete);
    
    app.use("/hotel", router);
}