module.exports = app => {
    const bookingController = require("../Controllers/BookingControllers");
    const router = require("express").Router();

    router.post("/", bookingController.create);

    router.put("/:ID", bookingController.update);

    router.get("/", bookingController.findAll);
    router.get("/:ID", bookingController.findById);
    router.get("/bookings/:UserID", bookingController.findByUser);

    router.delete("/:ID", bookingController.delete);
    
    app.use("/booking", router);
}