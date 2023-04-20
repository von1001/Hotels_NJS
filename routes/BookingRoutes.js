const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const bookingController = require("../Controllers/BookingController");
    const router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], bookingController.create);

    router.put("/:ID", [authJwt.verifyToken, authJwt.isAdmin], bookingController.update);

    router.get("/", bookingController.findAll);
    router.get("/:ID", bookingController.findById);
    router.get("/bookings/:UserID", bookingController.findByUser); //Найти букинг по пользователю

    router.delete("/:ID", [authJwt.verifyToken, authJwt.isAdmin], bookingController.delete);
    
    app.use("/booking", router);
}