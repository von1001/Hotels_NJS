module.exports = app => {
    const reviewController = require("../Controllers/ReviewController");
    const router = require("express").Router();
    
    router.post("/", reviewController.create);

    router.put("/:id", reviewController.update);

    router.get("/", reviewController.findAll);
    router.get("/:id", reviewController.findById);
    router.get("/:ReviewID/:PictureID", reviewController.findPicsByReview)

    router.delete("/:id", reviewController.delete);
    
    app.use("/review", router);
}
