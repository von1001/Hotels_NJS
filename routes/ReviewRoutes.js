const authJwt = require("../middleware/authJwt");

module.exports = app => {
    const reviewController = require("../Controllers/ReviewController");
    const router = require("express").Router();
    
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], reviewController.create);

    router.put("/:ID", [authJwt.verifyToken, authJwt.isAdmin], reviewController.update);

    router.get("/", reviewController.findAll);
    router.get("/:ID", reviewController.findById);
    router.get("/:ReviewID/:PictureID", reviewController.findPicsByReview) //Найти картинку по отзыву

    router.delete("/:ID", [authJwt.verifyToken, authJwt.isAdmin], reviewController.delete);
    
    app.use("/review", router);
}
